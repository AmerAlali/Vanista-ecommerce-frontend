"use client";
import React, { useMemo } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Badge,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { SlHandbag } from "react-icons/sl";
import { useCart } from "@/app/(root)/shop/hooks/useCart";
import Image from "next/image";

const CartDropdown = () => {
  const { data } = useCart();

  const totalCartItems = useMemo(() => {
    if (!data || !data.items) {
      return 0;
    }
    return data.items.reduce((total, product) => total + product.quantity, 0);
  }, [data]);
  return (
    <Popover
      maxHeight={300}
      className="min-w-[300px]"
      placement="bottom"
      radius="sm"
    >
      <PopoverTrigger>
        <Button
          variant="ghost"
          isIconOnly
          className="flex flex-row outline-none border-none items-center justify-center"
        >
          <Badge
            showOutline={false}
            size="sm"
            content={totalCartItems}
            shape="circle"
            color="primary"
          >
            <SlHandbag size={24} />
          </Badge>
        </Button>
      </PopoverTrigger>
      <PopoverContent className=" items-start ">
        <div className="pr-4 pt-4 max-h-[300px] overflow-hidden overflow-y-auto w-full s">
          {data?.items.map((item) => {
            return (
              <div
                className="flex flex-row justify-between items-start mb-4"
                key={item._id}
              >
                <div>
                  <Image
                    src={item.product.images[0]}
                    alt=""
                    height={100}
                    width={100}
                  />
                </div>
                <div>{item.size}</div>
              </div>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default CartDropdown;
