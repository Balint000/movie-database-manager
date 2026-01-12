import React from "react";

export interface ButtonProps {
  children: React.ReactNode; // Ez lesz a gomb felirata/tartalma
  onClick: () => void; // Ez egy függvény, ami nem ad vissza semmit (void)
  className?: string; // Opcionális CSS osztály, ha mégis kellene
  disabled?: boolean; // Ezt majd a 3. feladatnál kérni fogja (disabled gomb)
}
