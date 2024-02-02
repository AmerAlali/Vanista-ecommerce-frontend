import Filters from "./components/Filters";
import ProductsList from "./components/ProductsList";
import BreedCrumb from "./components/BreedCrumb";
import API from "@/lib/API";
import { apiRoutes } from "@/apiRoutes";

export default async function Shop() {
  const { data } = await API.get(apiRoutes.getAllProducts);
  return (
    <main className=" max-w-layout mx-auto px-layout mt-10">
      <BreedCrumb />
      <div className=" grid grid-cols-1 lg:grid-cols-5">
        <div>
          <Filters />
        </div>
        <div className=" col-span-4 mb-10">
          <div className=""></div>
          <ProductsList products={data} />
        </div>
      </div>
    </main>
  );
}
