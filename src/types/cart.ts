export type cartProps = {
  _id: string;
  user: string;
  items: cartItemProps[];
  total: number;
};

export type cartItemProps = {
  product: variant;
  size: string;
  _id: string;
  quantity: number;
};
