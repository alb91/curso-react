import styles from "./Navbar.module.css";
const Logo = () => {
  return (
    <div className={styles.containerLogo}>
      <img
        src="https://res.cloudinary.com/dyelzgumr/image/upload/v1677276428/geekCU/geekLogo_nvqwpk.png"
        alt="geekCU Logo"
        style={{ width: "70%", objectFit: "cover" }}
      />
    </div>
  );
};

export default Logo;
