import "./ProductCard.css";
const ProductCard = ({ title, price, isRed }) => {
  return (
    <div>
      <h1 className={isRed ? "red" : "blue"}>{title}</h1>
      <h1>{price}</h1>
    </div>
  );
};

export default ProductCard;
