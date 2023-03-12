import { useState } from "react";

const ItemCount = ({ quantity, initial = 1, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const adding = () => {
    if (counter < quantity) {
      setCounter(counter + 1);
    }
  };

  const rest = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={adding}>Add</button>
      <button onClick={rest}>Remove</button>
      <button onClick={() => onAdd(counter)}>Add to the cart</button>
    </div>
  );
};

export default ItemCount;
