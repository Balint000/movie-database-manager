import React from "react";
// Importáljuk a React-Bootstrap gombját, mert erre építünk rá (wrapper)
import { Button as BootstrapButton } from "react-bootstrap";
import { type ButtonProps } from "../models/ButtonProps";

// --- 1. FELADAT: Functional Component [cite: 23] ---
// Itt mondjuk meg a Reactnak: "Ez a komponens a fenti ButtonProps szabályait követi"
export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  disabled,
}) => {
  return (
    <BootstrapButton
      variant="primary" // Ez adja a kék Bootstrap színt [cite: 25]
      onClick={onClick} // Továbbadjuk a kattintást
      className={className} // Továbbadjuk a stílust (ha van)
      disabled={disabled} // Továbbadjuk a tiltást (ha van)
    >
      {children}
    </BootstrapButton>
  );
};
