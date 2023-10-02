import { cities } from "../services/citiesExtractor";
import { BsArrowRight } from "react-icons/bs";

export default function MenuBar() {
  return (
    <nav className="mx-auto flex max-w-[1200px] justify-between">
      <div className="flex gap-3">
        {cities.map((city) => (
          <button className="rounded-3xl bg-accent px-5 py-3 font-bold">
            {city}
          </button>
        ))}
      </div>

      <div>
        <button className="flex items-center gap-2 rounded-3xl border border-primary bg-accent px-5 py-3 font-bold !text-primary">
          View All
          <BsArrowRight />
        </button>
      </div>
    </nav>
  );
}
