export const apiRoutes = {
  signin: "auth/signin",
  signup: "auth/signup",
  profile: "auth/profile",
  getAllProducts: "product",
  getSingleProduct: (id: string) => `product/${id}`,
  updateCart: "cart",
  getCart: "cart",
};
