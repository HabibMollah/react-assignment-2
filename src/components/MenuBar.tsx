import { useCityContext } from "../hooks/useCityContext";
import { cities } from "../services/citiesExtractor";
import { BsArrowRight } from "react-icons/bs";

export default function MenuBar({
  setEndIndex,
}: {
  setEndIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { currentCity, setCurrentCity } = useCityContext();

  return (
    <nav className="mx-auto my-8 flex max-w-[1200px] justify-between">
      <div className="flex gap-3">
        {cities.map((city) => (
          <button
            key={city}
            onClick={() => {
              setCurrentCity(city);
              setEndIndex(6);
            }}
            className={`rounded-3xl px-5 py-3 font-bold ${
              currentCity === city ? "bg-primary text-white" : "bg-accent"
            }`}
          >
            {city}
          </button>
        ))}
      </div>

      <div>
        <button className="flex items-center gap-2 rounded-3xl border border-primary px-5 py-3 font-bold !text-primary">
          View All
          <BsArrowRight />
        </button>
      </div>
    </nav>
  );
}
