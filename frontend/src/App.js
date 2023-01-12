import { Route, Routes } from "react-router-dom";
import "./css/main.css";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
