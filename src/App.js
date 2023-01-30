import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/auth/Login";
import Navbar from "./Components/Navbar";
import Formtype from "./Components/Formtype";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/formpage" element={<Formtype />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
