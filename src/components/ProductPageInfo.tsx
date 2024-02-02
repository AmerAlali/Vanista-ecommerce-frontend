"use client";
import { Tabs, Tab } from "@nextui-org/react";
import { FC } from "react";

type productInfoProps = {
  product: product;
};

const ProductPageInfo: FC<productInfoProps> = ({ product }) => {
  return (
    <div className="flex w-full flex-col ">
      <h1 className="px-4 text-3xl mb-[20px] font-[600]">
        Product Information
      </h1>
      <Tabs variant="underlined" aria-label="Options" color="primary">
        <Tab key="descriptions" title="Descriptions">
          <p className="p-2.5 text-[#807D7E]">{product.description}</p>
        </Tab>
        <Tab key="additional-information" title="Additional Information">
          <p className="p-2.5 text-[#807D7E]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
            doloribus qui consequatur commodi alias mollitia, eaque non. Minima
            necessitatibus facere doloremque ipsam animi ullam optio voluptatem.
            Dolorum ea autem repellendus!
          </p>
        </Tab>
        <Tab key="reviews" title="Reviews">
          <p className="p-2.5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
            doloribus qui consequatur commodi alias mollitia, eaque non. Minima
            necessitatibus facere doloremque ipsam animi ullam optio voluptatem.
            Dolorum ea autem repellendus! Omnis explicabo tempore molestias
            commodi quae suscipit aliquid eos,
          </p>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ProductPageInfo;
