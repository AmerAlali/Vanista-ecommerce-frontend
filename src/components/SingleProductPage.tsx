"use client";
import { BreadcrumbItem, Breadcrumbs, Button } from "@nextui-org/react";
import Image from "next/image";
import { FC, useState } from "react";
import "react-toastify/dist/ReactToastify.css";

import { BsArrowRight, BsBoxSeam } from "react-icons/bs";
import { GoStarFill } from "react-icons/go";
import { SlHandbag } from "react-icons/sl";
import { AiOutlineDollar } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { MdOutlinePayments } from "react-icons/md";
import { useAddToCart } from "@/app/(root)/shop/hooks/useAddToCart";

type singleProductProps = {
  product: product;
};

const SingleProductPage: FC<singleProductProps> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState<string>(
    product.variants[0].size[0]
  );
  const [selectedVariant, setSelectedVariant] = useState<variant>(
    product.variants[0]
  );
  const [selectedColor, setSelectedColor] = useState<string>(
    product.variants[0].color
  );

  const { isPending, mutate: addToCartHandler } = useAddToCart({
    variant: selectedVariant._id,
    size: selectedSize,
  });

  return (
    <div className="max-w-[1300px] mx-auto px-[25px] my-[20px]">
      <div className="flex flex-row max-lg:flex-wrap max-lg:justify-center">
        <div>
          <Breadcrumbs size="lg" className="mb-[20px]">
            <BreadcrumbItem>Shop</BreadcrumbItem>
            <BreadcrumbItem>Women</BreadcrumbItem>
            <BreadcrumbItem>Top</BreadcrumbItem>
          </Breadcrumbs>
          <div className="">
            <Image
              fetchPriority="high"
              priority
              height={650}
              width={650}
              src={selectedVariant.images[0]}
              className="object-cover object-top aspect-square pointer-events-none"
              alt="fashion"
            />
          </div>
          <div className="mt-4 flex flex-row justify-between max-w-[650px]  gap-4">
            {selectedVariant.images.map((image) => (
              <div key={image}>
                <Image
                  height={162.5}
                  width={162.5}
                  src={image}
                  className="object-cover object-top aspect-square pointer-events-none"
                  alt="fashion"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="max-lg:py-4 lg:p-10 max-w-[600px] w-full mt-[11px] ">
          <h1
            style={{ lineHeight: "140%" }}
            className="text-4xl font-semibold text-[#3C4242] max-w-sm"
          >
            {product.title}
          </h1>
          <div className="flex flex-row gap-[10px] items-center my-[35px]">
            <GoStarFill size={22} color="#EDD146" />
            <GoStarFill size={22} color="#EDD146" />
            <GoStarFill size={22} color="#EDD146" />
            <GoStarFill size={22} color="#EDD146" />
            <GoStarFill size={22} color="#EDD146" />
            <p className="text-[#807D7E] text-[18px]">5</p>
          </div>
          <div>
            <div className="flex flex-row gap-[20px] items-center">
              <p className="text-[#3F4646] text-[18px] font-semibold">
                Select Size
              </p>
              <p>Size Guide</p>
              <BsArrowRight />
            </div>
            <div className="flex flex-row gap-[20px] items-center mt-[20px]">
              {selectedVariant.size.map((item) => (
                <button
                  onClick={() => setSelectedSize(item)}
                  className={`border-[1.5px] border-[#BEBCBD] rounded-[12px] h-[38px] w-[38px]  ${
                    selectedSize === item &&
                    "bg-black border-black animate-appearance-in transition-colors duration-500 text-white "
                  }`}
                  key={Math.random()}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="mt-[35px]">
              <p className="text-[#3F4646] text-[18px] font-semibold">
                Colours Available
              </p>
            </div>
            <div className="flex flex-row gap-[20px] items-center mt-[20px]">
              {product.variants.map((variant) => (
                <button
                  onClick={() => {
                    setSelectedColor(variant.color);
                    setSelectedVariant(variant);
                  }}
                  key={variant._id}
                  className=" relative flex flex-col justify-center items-center h-[28px] w-[28px]"
                >
                  <div
                    style={{ backgroundColor: "#" + variant.color }}
                    className={` rounded-full h-[28px] w-[28px]  ${
                      selectedColor === variant.color &&
                      " animate-appearance-in transition-colors duration-500"
                    }`}
                  ></div>
                  {selectedColor === variant.color && (
                    <div
                      style={{ borderColor: "#" + variant.color }}
                      className=" absolute  rounded-full h-[36px] w-[36px] border-1 animate-appearance-in transition-colors"
                    ></div>
                  )}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-[36px] flex flex-row items-center gap-[25px]">
            <Button
              className="bg-black text-white px-[40px]"
              size="lg"
              onPress={() => addToCartHandler()}
              disabled={isPending}
              startContent={<SlHandbag color="white" size={20} />}
              radius="md"
            >
              Add to Cart
            </Button>
            <div className="border-1 border-black text-black px-[40px] py-[10px] rounded-md ">
              ${selectedVariant.price}
            </div>
          </div>
          <div className="w-max-w-[534px] bg-[#BEBCBD] mt-[37px] h-[1px]"></div>
          <div className="grid grid-cols-2 mt-10 gap-10">
            <div>
              <BsBoxSeam size={30} />
              <h1 className="mt-2 font-medium text-lg">Free Shipping</h1>
              <p className="font-semibold text-gray-500 text-[15px]">
                Free shipping for orders above $150
              </p>
            </div>
            <div>
              <AiOutlineDollar size={30} />
              <h1 className="mt-2 font-medium text-lg"> Money Guarantee</h1>
              <p className="font-semibold text-gray-500 text-[15px]">
                Within 30 days for an exhange
              </p>
            </div>
            <div>
              <BiSupport size={30} />
              <h1 className="mt-2 font-medium text-lg">Online Support</h1>
              <p className="font-semibold text-gray-500 text-[15px]">
                24 Hours a day, 7 days a week
              </p>
            </div>
            <div>
              <MdOutlinePayments size={30} />
              <h1 className="mt-2 font-medium text-lg">Flexible Payment</h1>
              <p className="font-semibold text-gray-500 text-[15px]">
                Pay with multiple credit cards
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
