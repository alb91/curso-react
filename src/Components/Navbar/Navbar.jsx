import styles from "./Navbar.module.css";

import CartWidget from "../Catalog/CartWidget";

import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  let number = 12;
  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/" style={{ color: "#e1d4c7", textDecoration: "none" }}>
          <img
            src="https://res.cloudinary.com/dyelzgumr/image/upload/v1677276428/geekCU/geekLogo_nvqwpk.png"
            alt=""
          />
        </Link>

        <ul className={styles.containerList}>
          <Link to="/" className={styles.navbarItem}>
            All
          </Link>
          <Link to="/category/popular" className={styles.navbarItem}>
            Popular
          </Link>
          <Link to="/category/bestrated" className={styles.navbarItem}>
            Best Rated
          </Link>
          <Link to="/category/offers" className={styles.navbarItem}>
            Offers
          </Link>
        </ul>
        <CartWidget number={number} />
      </div>
      {children}
    </div>
  );
};

export default Navbar;
