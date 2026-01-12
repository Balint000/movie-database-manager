import { type Movie } from "../models/Movie";

export interface EditMovieModalProps {
  movie: Movie | null; // A szerkesztendő film (null, ha nincs nyitva)
  show: boolean;
  onClose: () => void;
  onSave: (updatedMovie: Movie) => void;
}
