import { useState } from "react";
import MenuBar from "./components/MenuBar";
import PropertyListPerCity from "./components/PropertyListPerCity";

export default function App() {
  const [endIndex, setEndIndex] = useState(6);

  return (
    <>
      <MenuBar setEndIndex={setEndIndex} />
      <main className="mx-auto max-w-[1200px]">
        <PropertyListPerCity endIndex={endIndex} setEndIndex={setEndIndex} />
      </main>
    </>
  );
}
