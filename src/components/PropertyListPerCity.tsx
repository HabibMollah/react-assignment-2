import { useState } from "react";
import data from "../data/properies.json";
import { useCityContext } from "../hooks/useCityContext";
import { LiaHourglassStartSolid } from "react-icons/lia";
import PropertyCard from "./PropertyCard";

export default function PropertyListPerCity() {
  const { currentCity } = useCityContext();
  const [count, setCount] = useState(6);

  const properties = data.properties;

  const propertiesPerCity = properties.filter(
    (property) => property.city === currentCity,
  );
  const visibleProperties = propertiesPerCity.slice(0, count);

  return (
    <section>
      <ul>
        {visibleProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </ul>
      <button
        onClick={() => setCount(count + 3)}
        className={`${
          propertiesPerCity <= visibleProperties ? "hidden" : "flex"
        } mx-auto items-center gap-2 rounded-3xl bg-primary px-5 py-2 font-bold !text-white`}
      >
        <LiaHourglassStartSolid className="h-5 w-5" />
        Show More
      </button>
    </section>
  );
}
