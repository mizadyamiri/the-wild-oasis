import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"], // uniqly identifies this data
    queryFn: getCabins, // a function that returns a promise
  });

  return { cabins, isLoading, error };
}
