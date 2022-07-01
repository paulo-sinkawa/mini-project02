import { CreateList } from "./pages/CreateList";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import "bootstrap/dist/css/bootstrap.css";
import { List } from "./pages/List";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-list" element={<CreateList />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </>
  );
}

export default App;
