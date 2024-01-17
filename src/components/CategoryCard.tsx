"use client";
import { Card, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

type categoryCardProps = {
  image: string;
  title: string;
};
const CategoryCard: FC<categoryCardProps> = ({ image, title }) => {
  return (
    <Card radius="lg" shadow="none" isPressable>
      <Image
        height={400}
        width={350}
        src={`/categories/${image}`}
        style={{ objectFit: "cover" }}
        alt="fashion"
      />
      <CardFooter className=" absolute bottom-2 justify-center">
        <Link
          href="/"
          className=" bg-white/100 w-full py-3 text-sm lg:text-lg transition-all rounded-lg  font-semibold hover:bg-white/90"
        >
          {title}
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CategoryCard;
