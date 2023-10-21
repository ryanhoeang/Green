import { useState } from "react";
import GreyBar from "./components/GreyBar";
import GreenBar from "./components/GreenBar";
import CategoryBar from "./components/CategoryBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        backgroundImage: `url("/map.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        margin: 0,
        padding: 0,
        height: "100vh",
      }}
    >
      <GreyBar />
      <GreenBar />
      <CategoryBar />
    </div>
  );
}

export default App;
