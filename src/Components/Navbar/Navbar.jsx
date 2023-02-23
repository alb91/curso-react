import CartWidget from "./CartWidget";
import Logo from "./Logo";
import NavbarList from "./NavbarList";

const Navbar = () => {
  return (
    <div>
      <Logo />
      <NavbarList />
      <CartWidget />
    </div>
  );
};

export default Navbar;
