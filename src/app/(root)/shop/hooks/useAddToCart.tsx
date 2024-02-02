import { apiRoutes } from "@/apiRoutes";
import API from "@/lib/API";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useAddToCart({
  variant,
  size,
}: {
  variant: string;
  size: string;
}) {
  const queryClient = useQueryClient();

  const mutationFn = async () => {
    await API.post(apiRoutes.updateCart, {
      variantToAdd: variant,
      size,
    });
  };
  const onSuccess = () => {
    queryClient.refetchQueries({ queryKey: ["cart"] });
  };
  return useMutation({
    mutationFn,
    onSuccess,
  });
}
