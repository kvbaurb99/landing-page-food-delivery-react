import { BrowserRouter } from "react-router-dom";
import { Route,Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Main from "./components/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />} path='/' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
