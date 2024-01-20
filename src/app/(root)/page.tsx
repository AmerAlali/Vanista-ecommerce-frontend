import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OurBestSellerList from "@/components/OurBestSellerList";
import ShopByCategories from "@/components/ShopByCategories";

export default function Home() {
  return (
    <main>
      <Hero />
      <ShopByCategories />
      <OurBestSellerList />
    </main>
  );
}
