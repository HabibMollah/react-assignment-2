import { useContext } from "react";
import { CityContext } from "../contexts/CityContext";

export function useCityContext() {
  const context = useContext(CityContext);
  if (context === null) {
    throw new Error("useCityContext must be used within a CityContextProvider");
  }

  return context;
}
