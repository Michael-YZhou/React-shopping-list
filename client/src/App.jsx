import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListPage from "./components/ItemListPage";
import About from "./components/About";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="itemList/" element={<ItemListPage />} />
        <Route path="about/" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
