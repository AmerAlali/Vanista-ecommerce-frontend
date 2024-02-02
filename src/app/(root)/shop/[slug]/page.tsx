import { apiRoutes } from "@/apiRoutes";
import ProductPageInfo from "@/components/ProductPageInfo";
import SimilarProducts from "@/components/SimilarProducts";
import SingleProductPage from "@/components/SingleProductPage";
import API from "@/lib/API";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

async function getProduct(slug: string) {
  try {
    const { data } = await API.get(apiRoutes.getSingleProduct(slug));
    return data;
  } catch (error) {
    return null;
  }
}

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // fetch data
  const Product: product = await getProduct(params.slug);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: Product.title,
    openGraph: {
      images: [Product.variants[0].images[0], ...previousImages],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

export default async function Product({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getProduct(params.slug);
  if (!data) notFound();
  return (
    <main>
      <SingleProductPage product={data} />
      <div className=" mt-16 max-w-[1300px] mx-auto px-2">
        <ProductPageInfo product={data} />
      </div>
      <div className=" mt-16 max-w-[1300px] mx-auto px-2">
        {/* <SimilarProducts /> */}
      </div>
    </main>
  );
}
