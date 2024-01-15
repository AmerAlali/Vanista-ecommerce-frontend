"use client";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SlHandbag, SlHeart } from "react-icons/sl";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar maxWidth="2xl" className="py-4" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className=" overflow-hidden">
          <Link href="/">
            <Image src={"/logo.png"} alt="Vanista" height={48.05} width={150} />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" className=" font-bold text-lg" href="#">
            Shop
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="text-lg" href="/">
            Men
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="text-lg" href="#">
            Women
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="#">
            <FiSearch strokeWidth={1.5} size={24} />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">
            <SlHeart size={24} />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">
            <SlHandbag size={24} />
          </Link>
        </NavbarItem>
        <NavbarItem className="max-sm:hidden">
          <Link href="#">
            <Button className="bg-black" radius="none" size="lg">
              <p className="text-white text-sm">Sign In</p>
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
