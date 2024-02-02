"use client";
import ProductCard from "@/components/ProductCard";
import { Select, SelectItem } from "@nextui-org/react";
import Image from "next/image";
import { FC } from "react";
import { CiGrid41 } from "react-icons/ci";
import { RiListCheck2 } from "react-icons/ri";

type productListProps = {
  products: product[];
};

const ProductsList: FC<productListProps> = ({ products }) => {
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
        {products.map((product) => {
          const { color, images, price } = product.variants[0];
          return (
            <ProductCard
              title={product.title}
              image={images[0]}
              brand={"Vanista"}
              price={price}
              key={product._id}
              id={product._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsList;
