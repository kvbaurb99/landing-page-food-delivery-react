import { BrowserRouter } from "react-router-dom";
import { Route,Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import productsArray from "./components/data/Products";
import { useState } from "react";

function App() {

  const [products, setProducts] = useState(productsArray)

  // TYPE FOOD FILTERS

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

  // PRICE FILTERS

  const lowestPrice = () => {
    const array = productsArray.filter((product) => product.price === '$')
    setProducts(array)
  }

  const lowPrice = () => {
    const array = productsArray.filter((product) => product.price === '$$')
    setProducts(array)
  }

  const highPrice = () => {
    const array = productsArray.filter((product) => product.price === '$$$')
    setProducts(array)
  }

  const highestPrice = () => {
    const array = productsArray.filter((product) => product.price === '$$$$')
    setProducts(array)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main products={products} asian={findAsian} burgers={findBurgers} all={findAll} pizza={findPizza} european={findEuropean} lowest={lowestPrice} low={lowPrice} high={highPrice} highest={highestPrice} />} path='/' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
