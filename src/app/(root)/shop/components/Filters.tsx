"use client";
import { Accordion, AccordionItem, Checkbox, Slider } from "@nextui-org/react";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Filters = () => {
  const categories = [
    "Men",
    "Women",
    "Kids",
    "Bags",
    "Accessories",
    "Winter Wear",
  ];
  const sizes = ["S", "M", "L", "XL", "XXL", "XXXL"];
  const colors = ["black", "yellow", "pink", "red"];

  return (
    <div className="lg:mr-6">
      <Accordion defaultSelectedKeys={"all"} selectionMode="multiple">
        <AccordionItem
          indicator={<IoIosArrowForward className="text-black" />}
          key="1"
          aria-label="Filter By Category"
          title="Filter By Category"
        >
          {categories.map((category) => (
            <div className="mb-2" key={category}>
              <Checkbox radius="sm">{category}</Checkbox>
            </div>
          ))}
        </AccordionItem>
        <AccordionItem
          key="2"
          indicator={<IoIosArrowForward className="text-black" />}
          aria-label="Filter by Price"
          title="Filter by Price"
        >
          <Slider
            label="Price Range"
            step={50}
            showOutline={true}
            minValue={0}
            size="sm"
            maxValue={2000}
            defaultValue={[0, 2000]}
            formatOptions={{ style: "currency", currency: "USD" }}
            className="max-w-full overflow-hidden"
          />
        </AccordionItem>
        <AccordionItem
          indicator={<IoIosArrowForward className="text-black" />}
          key="3"
          aria-label="Filter By Colors"
          title="Filter By Colors"
        >
          {colors.map((color) => (
            <button
              className="mb-3 flex outline-none border-none flex-row justify-between w-full items-center"
              key={color}
            >
              <div className="flex flex-row items-center gap-2">
                <div
                  className="h-[25px] w-[25px] rounded-md"
                  style={{ backgroundColor: color }}
                />
                <p className=" capitalize font-medium">{color}</p>
              </div>
              <div>(15)</div>
            </button>
          ))}
        </AccordionItem>
        <AccordionItem
          indicator={<IoIosArrowForward className="text-black" />}
          key="4"
          aria-label="Filter By Size"
          title="Filter By Size"
        >
          {sizes.map((size) => (
            <div className="mb-2" key={size}>
              <Checkbox radius="sm" className="font-medium">
                {size}
              </Checkbox>
            </div>
          ))}
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Filters;
