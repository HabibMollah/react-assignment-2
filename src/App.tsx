import MenuBar from "./components/MenuBar";
import PropertyListPerCity from "./components/PropertyListPerCity";

export default function App() {
  return (
    <>
      <MenuBar />
      <main className="mx-auto max-w-[1200px]">
        <PropertyListPerCity />
      </main>
    </>
  );
}
