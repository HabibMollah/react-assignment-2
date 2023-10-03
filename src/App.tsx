import { useState } from "react";
import MenuBar from "./components/MenuBar";
import PropertyListPerCity from "./components/PropertyListPerCity";
import { Route, Routes } from "react-router-dom";
import PropertyPage from "./components/PropertyPage";

export default function App() {
  const [endIndex, setEndIndex] = useState(6);

  return (
    <>
      <MenuBar setEndIndex={setEndIndex} />
      <main className="mx-auto max-w-[1200px]">
        <Routes>
          <Route
            path="/"
            element={
              <PropertyListPerCity
                endIndex={endIndex}
                setEndIndex={setEndIndex}
              />
            }
          />
          <Route path="/:propertyID" element={<PropertyPage />} />
        </Routes>
      </main>
    </>
  );
}
