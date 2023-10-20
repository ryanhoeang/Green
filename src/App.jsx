import { useState } from "react";
import GreyBar from "./components/GreyBar";
import GreenBar from "./components/GreenBar";
import CategoryBar from "./components/CategoryBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GreyBar />
      <GreenBar />
      <CategoryBar />
    </>
  );
}

export default App;
