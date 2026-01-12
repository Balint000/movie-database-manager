import React from "react";
import { Card, Button } from "react-bootstrap";
import { StarFill, Trash, Pencil } from "react-bootstrap-icons";
import { type Movie } from "../models/Movie";
import { type MovieCardProps } from "../models/MovieCardProps";
import "../styles/MovieCard.css";

export const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  onDelete,
  onEdit,
}) => {
  return (
    // Bootstrap Card a stílusért
    <Card className="shadow-sm h-100" id="card-hover">
      {/* Kép beillesztése */}
      <Card.Img
        variant="top"
        src={movie.thumbnail}
        alt={movie.title}
        // Kényszerítsük a képeket, hogy ne legyenek túl magasak
        style={{ height: "450px", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        {/* Cím és év */}
        <Card.Title className="mb-1">{movie.title}</Card.Title>
        <Card.Subtitle className="text-muted mb-3">{movie.year}</Card.Subtitle>

        {/* Értékelés */}
        <div className="d-flex align-items-center mt-auto">
          {/* Ikon használata */}
          <StarFill className="text-warning me-2" />
          {/* Értékelés kiírása */}
          <strong>{movie.rating}</strong> / 10
        </div>
        {/* Gombok */}
        <div className="d-flex gap-2">
          {/* 1. Szerkesztés Gomb */}
          <Button
            variant="outline-info"
            size="sm"
            onClick={() => onEdit(movie.id)}
          >
            <Pencil />
          </Button>

          {/* 2. Törlés Gomb */}
          <Button
            variant="outline-danger"
            size="sm"
            onClick={() => onDelete(movie.id)}
          >
            <Trash />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
