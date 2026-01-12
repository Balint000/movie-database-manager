import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { type Movie } from "../models/Movie";
import { type MovieCardProps } from "../models/MovieCardProps";

export const EditMovieModal: React.FC<EditMovieModalProps> = ({
  movie,
  show,
  onClose,
  onSave,
}) => {
  // A belső state kezeli az input mezők tartalmát
  const [formData, setFormData] = useState<Movie | null>(null);

  // Ha a modal megjelenik, vagy a movie változik, szinkronizáljuk a form adatokat
  useEffect(() => {
    setFormData(movie);
  }, [movie]);

  // Ha a movie null (zárva van), vagy a title üres, nem menthető
  const isSaveDisabled =
    !formData || !formData.title.trim() || formData.year === 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        // Konvertálás számmá, ha a mező year vagy rating
        [name]:
          name === "year" || name === "rating" ? parseFloat(value) || 0 : value,
      };
    });
  };

  const handleSave = () => {
    if (formData) {
      onSave(formData);
      onClose();
    }
  };

  if (!formData) return null; // Ne rendereljük, ha nincs adat

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editing: {movie?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {/* Cím szerkesztése */}
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              // Az üres mentést akadályozzuk meg (de a gombbal, nem az inputtal)
            />
          </Form.Group>

          {/* Év szerkesztése */}
          <Form.Group className="mb-3">
            <Form.Label>Year</Form.Label>
            <Form.Control
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
            />
          </Form.Group>

          {/* Értékelés szerkesztése */}
          <Form.Group className="mb-3">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              step="0.1"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={handleSave}
          disabled={isSaveDisabled}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
