import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductPageInfo from "@/components/ProductPageInfo";
import SimilarProducts from "@/components/SimilarProducts";
import SingleProductPage from "@/components/SingleProductPage";

export default function Product() {
  return (
    <main>
      <SingleProductPage />
      <div className=" mt-16 max-w-[1300px] mx-auto px-2">
        <ProductPageInfo />
      </div>
      <div className=" mt-16 max-w-[1300px] mx-auto px-2">
        <SimilarProducts />
      </div>
    </main>
  );
}
