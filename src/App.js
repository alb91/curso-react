import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Components/Catalog/ItemDetailContainer.jsx";
import ItemListContainer from "./Components/Catalog/ItemListContainer.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryName" element={<ItemListContainer />} />
        <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />

        <Route path="*" element={<h1> error 404: Not found </h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
