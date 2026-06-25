import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivacyPolicy from "./PrivacyPolicy";
import Home from "./Home";
function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
