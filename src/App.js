import Footer from "./Components/Footer/Footer.jsx";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import ProductCard from "./Components/Navbar/ProductCard.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Bienvenido" />
      <ProductCard title="Producto 2" price={200} isRed={false} />
      <ProductCard title="Producto 3" price={200} isRed={true} />

      <Footer />
    </div>
  );
}

export default App;
