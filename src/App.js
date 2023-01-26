import { BrowserRouter } from "react-router-dom";
import { Route,Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import productsArray from "./components/data/Products";
import { useState } from "react";

function App() {

  const [products, setProducts] = useState(productsArray)

  const findBurgers = () => {
    const array = productsArray.filter((product) => product.type === 'burger' )
    setProducts(array)
  }

  const findAsian = () => {
    const array = productsArray.filter((product) => product.type === 'asian')
    setProducts(array)
  }

  const findAll = () => {
    setProducts(productsArray)
  }

  const findPizza = () => {
    const array = productsArray.filter((product) => product.type === 'pizza')
    setProducts(array)
  }

  const findEuropean = () => {
    const array = productsArray.filter((product) => product.type === 'european')
    setProducts(array)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main products={products} asian={findAsian} burgers={findBurgers} all={findAll} pizza={findPizza} european={findEuropean} />} path='/' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
