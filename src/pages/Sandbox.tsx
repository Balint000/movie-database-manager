import { useState } from "react";
import { Button } from "../components/Button";
import "../styles/Sandbox.css";

const Sandbox: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);

  const handleIncrease = () => {
    setCounter(counter + 1);
  };

  const handleDecrease = () => {
    if (counter > 0) {
      // Minimum érték 0 legyen
      setCounter(counter - 1);
    }
  };

  return (
    <div className="container mt-5" id="counter">
      <h1>Counter: {counter}</h1> {/* Megjelenik a számláló aktuális értéke */}
      <div className="d-flex gap-2">
        <Button onClick={handleIncrease} className="btn-success">
          + Increase
        </Button>

        <Button
          onClick={handleDecrease}
          className="btn-danger"
          disabled={counter === 0} // Ha 0, akkor "disabled" legyen
        >
          - Decrease
        </Button>
      </div>
    </div>
  );
};

export default Sandbox;
