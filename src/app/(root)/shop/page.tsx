import Filters from "./components/Filters";
import ProductsList from "./components/ProductsList";
import BreedCrumb from "./components/BreedCrumb";

export default async function Shop() {
  return (
    <main className=" max-w-layout mx-auto px-layout mt-10">
      <BreedCrumb />
      <div className=" grid grid-cols-1 lg:grid-cols-5">
        <div>
          <Filters />
        </div>
        <div className=" col-span-4 mb-10">
          <div className=""></div>
          <ProductsList />
        </div>
      </div>
    </main>
  );
}
