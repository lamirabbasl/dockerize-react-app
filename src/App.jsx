import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// pages
import HomePage from "./pages/HomePage";
import VideoViewer from "./pages/VideoViewer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/video/:id" element={<VideoViewer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
