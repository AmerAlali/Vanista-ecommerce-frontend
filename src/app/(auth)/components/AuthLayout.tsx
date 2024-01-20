"use client";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

type Props = {
  image?: string;
  children: React.ReactNode;
};

const AuthLayout: FC<Props> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 min-h-screen max-h-screen h-full">
      <div className="w-full max-sm:min-h-[300px]  bg-[#f1eae2] xl:col-span-2 h-full relative">
        <div className="absolute z-10 top-8 left-8">
          <Link href="/" className="w-auto h-auto">
            <Image
              priority
              fetchPriority="high"
              src={"/logo.png"}
              alt="Vanista"
              height={48.05}
              width={150}
              className="w-[120px] md:w-[150px] "
            />
          </Link>
        </div>
        <Image
          fetchPriority="high"
          priority
          style={{ objectFit: "contain" }}
          src={"/loginBackground-PhotoRoom.png-PhotoRoom.png"}
          alt="image"
          fill
        />
      </div>
      <div className="flex items-center">{children}</div>
    </div>
  );
};

export default AuthLayout;
