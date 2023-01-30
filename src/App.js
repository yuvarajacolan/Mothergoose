import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/auth/Login";
import Navbar from "./Components/Navbar";
import Formtype from "./Components/Formtype";
import Graph from "./Components/Graph";

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Formtype /> */}
    
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
