import styles from "./Navbar.module.css";
import { ImCart } from "react-icons/im";

const CartWidget = () => {
  return (
    <div className={styles.containerCartButton}>
      <ImCart color="blue" size={50} />
    </div>
  );
};

export default CartWidget;
