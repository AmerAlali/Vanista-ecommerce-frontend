import { apiRoutes } from "@/apiRoutes";
import API from "@/lib/API";
import { cartProps } from "@/types/cart";
import { useQuery } from "@tanstack/react-query";

export function useCart() {
  const queryFn = async () => {
    const { data } = await API.get(apiRoutes.getCart);
    return data;
  };
  const queryKey = ["cart"];

  return useQuery<cartProps>({
    queryKey,
    queryFn,
  });
}
