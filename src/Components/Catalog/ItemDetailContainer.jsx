import React from "react";

import { useParams } from "react-router-dom";

import { products } from "../../productsMock.js";
import ItemCount from "./ItemCount.jsx";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const productSelected = products.find((element) => element.id === Number(id));

  const onAdd = (amount) => {
    console.log(` ${amount} items added to the cart. `);
  };

  return (
    <div>
      <h1>{productSelected.name}</h1>
      <img src={productSelected.image} alt="" />
      <ItemCount quantity={productSelected.quantity} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetailContainer;
