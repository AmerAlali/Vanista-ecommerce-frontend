"use client";
import { Input } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiPhoneCall, BiVoicemail } from "react-icons/bi";
import { IoMailOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  const links = [
    "Information",
    "My Account",
    "Login",
    "My Cart",
    "My wishlist",
    "Service",
    "About Us",
    "Delivery Information",
    "Privacy Policy",
    "Terms & Conditions",
  ];
  return (
    <div className=" bg-black text-white">
      <div className="max-w-layout mx-auto grid grid-cols-1 gap-10 items-center justify-center md:grid-cols-2 lg:grid-cols-4 py-16 px-[25px]">
        <div className="flex flex-col space-y-5">
          <Link href="/" className="">
            <Image
              style={{ filter: "brightness(0) invert(1)" }}
              src={"/logo.png"}
              alt="Vanista"
              height={48.05}
              width={150}
            />
          </Link>
          <Link href="#" className="flex flex-row items-center gap-2">
            <BiPhoneCall size={25} /> <p>(704) 555-0127</p>
          </Link>
          <Link href="#" className="flex flex-row items-center gap-2">
            <IoMailOutline size={25} />
            <p>support@vanista.com</p>
          </Link>
          <Link href="#" className="flex flex-row items-center gap-2">
            <SlLocationPin size={25} />{" "}
            <p>3891 Ranchview Dr. Richardson, California 62639</p>
          </Link>
        </div>
        <div className="flex flex-col space-y-5">
          {links.splice(0, 4).map((link) => (
            <Link
              key={Math.random()}
              href="#"
              className=" hover:text-white/70 transition-colors"
            >
              {link}
            </Link>
          ))}
        </div>
        <div className="flex flex-col space-y-5">
          {links.splice(2, 8).map((link) => (
            <Link
              key={Math.random()}
              href="#"
              className=" hover:text-white/70 transition-colors"
            >
              {link}
            </Link>
          ))}
        </div>
        <div className="flex flex-col space-y-5">
          <p>Subscribe</p>
          <p className="text-gray-300">
            Enter your email below to be the first to know about new collections
            and product launches
          </p>
          <Input
            type="email"
            variant="bordered"
            size="lg"
            label="Email"
            placeholder="you@example.com"
            className="max-w-sm"
            labelPlacement="outside"
            startContent={
              <IoMailOutline className="text-2xl text-default-400 bg-transparent pointer-events-none flex-shrink-0" />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
