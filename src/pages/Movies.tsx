import React, { useState } from "react";
import { Row, Col, Modal, Button, Form } from "react-bootstrap";
import { MOVIES } from "../data/movies";
import { type Movie } from "../models/Movie";
import { MovieCard } from "../components/MovieCard";
import { EditMovieModal } from "../components/EditMovieModal.tsx";

const Movies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>(MOVIES);

  // Search/Sort States
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortBy, setSortBy] = useState<"title" | "year" | "rating">("rating");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  // Edit States
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [movieToEdit, setMovieToEdit] = useState<Movie | null>(null);

  // Delete States
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [movieToDelete, setMovieToDelete] = useState<number | null>(null);

  const handleDeleteClick = (id: number) => {
    setMovieToDelete(id);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    if (movieToDelete !== null) {
      setMovies(movies.filter((movie) => movie.id !== movieToDelete));
      setMovieToDelete(null);
      setShowDeleteModal(false);
    }
  };

  const handleEditClick = (id: number) => {
    const selectedMovie = movies.find((m) => m.id === id);
    if (selectedMovie) {
      setMovieToEdit(selectedMovie);
      setShowEditModal(true);
    }
  };

  const handleSaveEdit = (updatedMovie: Movie) => {
    setMovies(
      movies.map((movie) =>
        movie.id === updatedMovie.id ? updatedMovie : movie,
      ),
    );
    setShowEditModal(false);
    setMovieToEdit(null);
  };

  // --- Search/Filter/Sort Logic ---

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // The filtering logic
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // The combined filter and sort logic
  const sortedAndFilteredMovies = [...filteredMovies].sort((a, b) => {
    let compareResult = 0;

    const aValue = a[sortBy];
    const bValue = b[sortBy];

    if (aValue < bValue) {
      compareResult = -1;
    } else if (aValue > bValue) {
      compareResult = 1;
    }

    return sortOrder === "asc" ? compareResult : -compareResult;
  });

  return (
    // container-fluid and margin classes retained
    <div className="container-fluid mt-4 margin">
      <h1 className="mb-4 text-center">Movie Database</h1>

      {/* SEARCH, SORTING SECTION */}
      <div className="mb-5 p-3 border rounded">
        {/* Search Input Field */}
        <Form.Group className="mb-4">
          <Form.Label>Search by Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter movie title..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </Form.Group>

        {/* SORTING CONTROLS */}
        <Row className="mt-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Sort by</Form.Label>
              <Form.Select
                value={sortBy}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setSortBy(e.target.value as "title" | "year" | "rating")
                }
              >
                <option value="rating">Rating</option>
                <option value="year">Release Year</option>
                <option value="title">Title</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Sort Order</Form.Label>
              <Form.Select
                value={sortOrder}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setSortOrder(e.target.value as "asc" | "desc")
                }
              >
                <option value="desc">Descending</option>
                <option value="asc">Ascending</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
      </div>

      {/* MOVIE LIST DISPLAY */}
      <Row xs={1} md={4} lg={6} className="g-4">
        {/* Using the filtered and sorted list */}
        {sortedAndFilteredMovies.map((movie) => (
          <Col key={movie.id}>
            <MovieCard
              movie={movie}
              onDelete={handleDeleteClick}
              onEdit={handleEditClick}
            />
          </Col>
        ))}
      </Row>

      {/* DELETE MODAL (POP-UP) */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete the movie "
          {movies.find((m) => m.id === movieToDelete)?.title || "this"}" from
          the list?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Confirm Delete
          </Button>
        </Modal.Footer>
      </Modal>

      {/* EDIT MODAL */}
      <EditMovieModal
        show={showEditModal}
        movie={movieToEdit}
        onClose={() => setShowEditModal(false)}
        onSave={handleSaveEdit}
      />
    </div>
  );
};

export default Movies;
