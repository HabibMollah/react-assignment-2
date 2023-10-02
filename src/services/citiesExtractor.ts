import data from "../data/properies.json";

const properties = data.properties;
const cities: string[] = [];
for (const property of properties) {
  const city = property.city;
  if (!cities.includes(city)) {
    cities.push(city);
  }
}

export { cities };
