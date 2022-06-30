import { CreateList } from "./pages/CreateList";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-list" element={<CreateList />} />
      </Routes>
    </>
  );
}

export default App;
