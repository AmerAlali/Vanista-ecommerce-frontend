import ProductCard from "./ProductCard";

const SimilarProducts = () => {
  const similarProductsList = [
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
      <h1 className="text-[28px] text-[#3C4242] font-[600] mb-[50px] ">
        Simliar Products
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-[30px]">
        {similarProductsList.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
