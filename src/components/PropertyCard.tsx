import Property from "../types/property";

export default function PropertyCard({ property }: { property: Property }) {
  return <li>{property.name}</li>;
}
