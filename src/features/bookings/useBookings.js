import { useQuery } from "@tanstack/react-query";
import { getbookings } from "../../services/apiBookings";

export function useBookings() {
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: getbookings,
  });

  return { bookings, isLoading, error };
}
