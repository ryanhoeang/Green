import { useState } from "react";
import GreyBar from "./components/GreyBar";
import GreenBar from "./components/GreenBar";
import CategoryBar from "./components/CategoryBar";
import Community from "./components/Community";
import Services from "./components/Services";
import Home from "./components/Home";
import Map from "./components/Map";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Map />
      <GreyBar />
      <GreenBar />
      <CategoryBar />
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
