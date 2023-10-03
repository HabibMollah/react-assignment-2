import data from "../data/properies.json";
import { useCityContext } from "../hooks/useCityContext";
import { LiaHourglassStartSolid } from "react-icons/lia";
import PropertyCard from "./PropertyCard";
import { Link } from "react-router-dom";

export default function PropertyListPerCity({
  endIndex,
  setEndIndex,
}: {
  endIndex: number;
  setEndIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { currentCity } = useCityContext();
  const properties = data.properties;

  const propertiesPerCity = properties.filter(
    (property) => property.city === currentCity,
  );
  const visibleProperties = propertiesPerCity.slice(0, endIndex);

  return (
    <section>
      <ul className="grid grid-cols-3 justify-items-center gap-8">
        {visibleProperties.map((property) => (
          <Link key={property.id} to={`/${property.id}`}>
            <PropertyCard property={property} />
          </Link>
        ))}
      </ul>
      <button
        onClick={() => setEndIndex(endIndex + 3)}
        className={`${
          propertiesPerCity <= visibleProperties ? "hidden" : "flex"
        } mx-auto my-8 items-center gap-2 rounded-3xl bg-primary px-5 py-2 font-bold !text-white`}
      >
        <LiaHourglassStartSolid className="h-5 w-5" />
        Show More
      </button>
    </section>
  );
}
