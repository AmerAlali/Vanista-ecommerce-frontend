"use client";
import ProductCard from "@/components/ProductCard";
import { Select, SelectItem } from "@nextui-org/react";
import Image from "next/image";
import { CiGrid41 } from "react-icons/ci";
import { RiListCheck2 } from "react-icons/ri";

const ProductsList = () => {
  const ProductList = [
    {
      id: Math.random(),
      title: "Black Sweatshirt",
      brand: "Jhanvi’s  Brand",
      price: "$123.00",
      image: "3.jpg",
    },
    {
      id: Math.random(),
      title: "line Pattern Black Hat",
      brand: "AS’s  Brand",
      price: "$37.00",
      image: "2.jpg",
    },
    {
      id: Math.random(),
      title: "Black Shorts",
      brand: "MM’s  Brand",
      price: "$44.00",
      image: "4.jpg",
    },
    {
      id: Math.random(),
      title: "Levender Hoodie",
      brand: "Nike’s  Brand",
      price: "$119.00",
      image: "1.jpg",
    },
    {
      id: Math.random(),
      title: "Black Sweatshirt",
      brand: "Jhanvi’s  Brand",
      price: "$123.00",
      image: "3.jpg",
    },
    {
      id: Math.random(),
      title: "line Pattern Black Hat",
      brand: "AS’s  Brand",
      price: "$37.00",
      image: "2.jpg",
    },
    {
      id: Math.random(),
      title: "Black Shorts",
      brand: "MM’s  Brand",
      price: "$44.00",
      image: "4.jpg",
    },
    {
      id: Math.random(),
      title: "Levender Hoodie",
      brand: "Nike’s  Brand",
      price: "$119.00",
      image: "1.jpg",
    },
  ];

  const sortByOptions = [
    {
      key: "latest",
      value: "latest",
      title: "Latest",
    },
    {
      key: "Best-selling",
      value: "Best-selling",
      title: "Best Selling",
    },
    {
      key: "a-z",
      value: "a-z",
      title: "Product Title (A-Z)",
    },
    {
      key: "z-a",
      value: "z-a",
      title: "Product Title (Z-A)",
    },
    {
      key: "price_low_high",
      value: "price_low_high",
      title: "Price (Low to High)",
    },
    {
      key: "price_high_low",
      value: "price_high_low",
      title: "Price (High to Low)",
    },
  ];

  return (
    <div>
      <div className="mb-4 flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-4 ">
          <CiGrid41 size={25} strokeWidth={0.5} />
          <RiListCheck2 size={25} />
          <p className=" font-semibold">Showing 11 product </p>
        </div>
        <div className="max-w-[200px] w-full">
          <Select
            variant="bordered"
            placeholder="Sort by"
            size="sm"
            className="max-w-[200px]"
          >
            {sortByOptions.map((option) => (
              <SelectItem key={option.key} value={option.title}>
                {option.title}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>
      <Image
        src={"/collection.png"}
        alt="hero"
        height={0}
        priority
        fetchPriority="high"
        width={0}
        sizes="100vw"
        className="max-w-full max-h-[400px] w-full h-full object-cover rounded-xl mb-6 pointer-events-none"
      />
      <div className="grid grid-cols-2 max-sm:grid-cols-1 lg:grid-cols-3 gap-x-[24px] gap-y-[50px]">
        {ProductList.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
