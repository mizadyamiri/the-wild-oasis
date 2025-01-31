import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";
import Stats from "./Stats";
import { useCabins } from "../cabins/useCabins";
import SalesChart from "./SalesChart";

import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoading: isLoading1 } = useRecentBookings();
  const { confirmendStays, numDays, isLoading: isLoading2 } = useRecentStays();
  const { cabins, isLoading: isLoading3 } = useCabins();

  const isLoading = isLoading1 || isLoading2 || isLoading3;

  if (isLoading) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmendStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />

      <TodayActivity />

      <DurationChart confirmedStays={confirmendStays} />

      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
