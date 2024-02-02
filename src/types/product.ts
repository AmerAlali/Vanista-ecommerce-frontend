type product = {
  _id: string;
  title: string;
  description: string;
  reviews: any[];
  variants: variant[];
  categories: any[];
  status: "Active" | "Draft";
};

type variant = {
  _id: string;
  size: string[];
  images: string[];
  color: string;
  price: number;
  productId: string;
  status: "Active" | "Draft";
};
