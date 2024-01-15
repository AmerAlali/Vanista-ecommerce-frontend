"use client";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import CategoryCard from "./CategoryCard";
import { Button } from "@nextui-org/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { Controller } from "swiper/modules";
const ShopByCategories = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  return (
    <div className="max-w-layout px-[25px] mx-auto my-[100px]">
      <div className="flex flex-row justify-between items-center mb-[50px]">
        <div>
          <h1 className="text-3xl md:text-4xl max-md:max-w-[200px] font-medium">
            Shop by Categories
          </h1>
        </div>
        <div className="flex-row items-center flex-nowrap space-x-4">
          <Button
            onClick={() => swiperRef?.slidePrev()}
            isIconOnly
            radius="sm"
            size="lg"
          >
            <IoIosArrowBack />
          </Button>
          <Button
            onClick={() => swiperRef?.slideNext()}
            isIconOnly
            className="bg-black"
            radius="sm"
            size="lg"
          >
            <IoIosArrowForward className="text-white" />
          </Button>
        </div>
      </div>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={1}
        centeredSlides={true}
        breakpoints={{
          300: {
            slidesPerView: 2,
            centeredSlides: false,
          },
          700: {
            slidesPerView: 3,
            centeredSlides: false,
          },
          1000: {
            slidesPerView: 4,
            centeredSlides: false,
          },
        }}
        spaceBetween={30}
        modules={[Controller]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CategoryCard image="1.png" title="Men wear" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard image="2.png" title="Women Wear" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard image="3.png" title="Casual Wear" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard image="4.png" title="Winter Wear" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard image="5.png" title="Kids Wear" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ShopByCategories;
