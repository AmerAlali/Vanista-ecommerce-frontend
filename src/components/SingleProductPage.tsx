"use client";
import { BreadcrumbItem, Breadcrumbs, Button } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { GoStarFill } from "react-icons/go";
import { SlHandbag } from "react-icons/sl";

const SingleProductPage = () => {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  return (
    <div className="max-w-[1300px] mx-auto px-[25px] my-[20px]">
      <Breadcrumbs size="lg" className="mb-[20px]">
        <BreadcrumbItem>Shop</BreadcrumbItem>
        <BreadcrumbItem>Women</BreadcrumbItem>
        <BreadcrumbItem>Top</BreadcrumbItem>
      </Breadcrumbs>
      <div className="grid grid-cols-1  md:grid-cols-2">
        <div>
          <div className="max-w-[600px] w-full min-h-[500px] h-full relative">
            <Image
              fill
              src={`/products/product.jpg`}
              className="object-cover object-center "
              alt="fashion"
            />
          </div>
          <div className="mt-4 flex flex-row justify-between max-w-[600px]  gap-4">
            {[0, 1, 2, 3].map((item) => (
              <div key={item} className="w-[140px] h-[100px] relative">
                <Image
                  fill
                  src={`/products/3.jpg`}
                  className="object-cover object-center "
                  alt="fashion"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="p-5">
          <h1
            style={{ lineHeight: "140%" }}
            className="text-4xl font-semibold text-[#3C4242] max-w-sm"
          >
            Raven Hoodie With Black colored Design
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
              {["XS", "S", "M", "L", "XL"].map((item) => (
                <button
                  onClick={() => setSelectedSize(item)}
                  className={`border-[1.5px] border-[#BEBCBD] rounded-[12px] h-[38px] w-[38px]  ${
                    selectedSize === item &&
                    "bg-[#3C4242] border-[#3C4242] animate-appearance-in transition-colors duration-500 text-white "
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
              {["black", "yellow", "pink", "red"].map((item) => (
                <button
                  onClick={() => setSelectedColor(item)}
                  key={Math.random()}
                  className=" relative flex flex-col justify-center items-center h-[28px] w-[28px]"
                >
                  <div
                    style={{ backgroundColor: item }}
                    className={` rounded-full h-[28px] w-[28px]  ${
                      selectedColor === item &&
                      " animate-appearance-in transition-colors duration-500"
                    }`}
                  ></div>
                  {selectedColor === item && (
                    <div
                      style={{ borderColor: item }}
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
              startContent={<SlHandbag color="white" size={20} />}
              radius="md"
            >
              Add to Cart
            </Button>
            <div className="border-1 border-black text-black px-[40px] py-[10px] rounded-md ">
              $63.00
            </div>
          </div>
          <div className="w-max-w-[534px] bg-[#BEBCBD] mt-[37px] h-[1px]"></div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
