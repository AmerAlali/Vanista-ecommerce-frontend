"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { FC, useState } from "react";
import { SlBag, SlEye, SlHandbag, SlHeart } from "react-icons/sl";

type ProductCardProps = {
  image: string;
  title: string;
  brand: string;
  price: string;
  id: number;
};
const ProductCard: FC<ProductCardProps> = ({
  image,
  title,
  brand,
  id,
  price,
}) => {
  const [isCardHoverd, setIsCardHoverd] = useState<boolean>(false);
  return (
    <Card
      onMouseEnter={() => setIsCardHoverd(true)}
      onMouseLeave={() => setIsCardHoverd(false)}
      radius="lg"
      shadow="none"
      isPressable
    >
      <CardBody className="overflow-hidden">
        <div className="w-[300px] h-[300px]">
          <Image
            fill
            src={`/products/${image}`}
            className="object-cover object-center "
            alt="fashion"
          />
        </div>
        <AnimatePresence>
          {isCardHoverd && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className=" absolute top-5 justify-end right-5">
                <div className="flex flex-col gap-y-3">
                  <Button
                    isIconOnly
                    radius="full"
                    className="bg-white hover:bg-white"
                    size="md"
                  >
                    <SlHeart size={20} />
                  </Button>
                  <Button
                    isIconOnly
                    radius="full"
                    className="bg-white"
                    size="md"
                  >
                    <SlEye size={20} />
                  </Button>
                </div>
              </div>
              <div className=" absolute bottom-5 right-0 px-5 w-full">
                <Button
                  className="bg-white w-full"
                  startContent={<SlHandbag />}
                  radius="lg"
                  size="lg"
                >
                  <Link href="/" className="text-sm  ">
                    Add to Cart
                  </Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardBody>

      <CardFooter className="flex flex-col px-0 items-start">
        <p className=" font-bold line-clamp-1">{title}</p>
        <p className="text-gray-500">{brand}</p>
        <p className="font-medium">
          {price}{" "}
          <span className=" font-light text line-through text-gray-500">
            ${Number(price.split("$")[1]) - 20}
          </span>
        </p>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
