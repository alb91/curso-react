import styles from "./Navbar.module.css";
const NavbarList = () => {
  return (
    <ul className={styles.containerList}>
      <li>Most Popular Items</li>
      <li>Offers</li>
      <li>Best Rated Items</li>
    </ul>
  );
};

export default NavbarList;
