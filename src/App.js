import "./App.css";
import Grid from "./components/Grid";
import Fractalize from "./pages/Fractalize";
// This is a React Router v6 app
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Grid />} />
        <Route path="/fractal" element={<Fractalize />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
