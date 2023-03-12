import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock.js";
import ItemList from "./ItemList.jsx";

const ItemListContainer = () => {
  const { categoryName } = useParams();

  const [items, setItems] = useState([]);

  const filteredItems = products.filter(
    (element) => element.classification === categoryName
  );

  useEffect(() => {
    const productList = new Promise((resolve, reject) => {
      resolve(categoryName ? filteredItems : products);
    });

    productList
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryName]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
