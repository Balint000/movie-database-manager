import { type Movie } from "../models/Movie";

export interface MovieCardProps {
  movie: Movie;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}
