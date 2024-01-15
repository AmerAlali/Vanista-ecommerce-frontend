import ProductCard from "./ProductCard";

const OurBestSellerList = () => {
  const bestSellerProducts = [
    {
      id: Math.random(),
      title: "Black Sweatshirt",
      brand: "Jhanvi’s  Brand",
      price: "$123.00",
      image: "3.jpg",
    },
    {
      id: Math.random(),
      title: "line Pattern Black Hat",
      brand: "AS’s  Brand",
      price: "$37.00",
      image: "2.jpg",
    },
    {
      id: Math.random(),
      title: "Black Shorts",
      brand: "MM’s  Brand",
      price: "$44.00",
      image: "4.jpg",
    },
    {
      id: Math.random(),
      title: "Levender Hoodie",
      brand: "Nike’s  Brand",
      price: "$119.00",
      image: "1.jpg",
    },
    {
      id: Math.random(),
      title: "Black Sweatshirt",
      brand: "Jhanvi’s  Brand",
      price: "$123.00",
      image: "3.jpg",
    },
    {
      id: Math.random(),
      title: "line Pattern Black Hat",
      brand: "AS’s  Brand",
      price: "$37.00",
      image: "2.jpg",
    },
    {
      id: Math.random(),
      title: "Black Shorts",
      brand: "MM’s  Brand",
      price: "$44.00",
      image: "4.jpg",
    },
    {
      id: Math.random(),
      title: "Levender Hoodie",
      brand: "Nike’s  Brand",
      price: "$119.00",
      image: "1.jpg",
    },
  ];

  return (
    <div className="max-w-layout px-[25px] mx-auto my-[100px]">
      <h1 className="text-3xl md:text-4xl mb-[50px] text-center font-medium">
        Our Bestseller
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-[30px]">
        {bestSellerProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default OurBestSellerList;
