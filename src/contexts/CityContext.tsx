import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type CityContextType = {
  currentCity: string;
  setCurrentCity: Dispatch<SetStateAction<string>>;
};

export const CityContext = createContext<null | CityContextType>(null);

export default function CityContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [currentCity, setCurrentCity] = useState("New York");

  return (
    <CityContext.Provider value={{ currentCity, setCurrentCity }}>
      {children}
    </CityContext.Provider>
  );
}
