import { useCabins } from "./useCabins";
import { useSearchParams } from "react-router-dom";

import Table from "../../ui/Table";
import CabinRow from "./CabinRow";
import Spinner from "../../ui/Spinner";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";

function CabinTable() {
  const { cabins, isLoading } = useCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  if (!cabins.length) return <Empty resource='cabins' />;

  // FILTER
  const filterValue = searchParams.get("discount") || "all";
  let filteredCabins;
  switch (filterValue) {
    case "all":
      filteredCabins = cabins.filter(() => true);
      break;
    case "no-discount":
      filteredCabins = cabins.filter(c => c.discount === 0);
      break;
    case "with-discount":
      filteredCabins = cabins.filter(c => c.discount > 0);
      break;
  }

  // SORT
  const sortValue = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortValue.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabins = filteredCabins.sort((a, b) => (a[field] - b[field]) * modifier);

  return (
    <Menus>
      <Table columns='0.6fr 1.8fr 2.2fr 1fr 1fr 1fr'>
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={sortedCabins}
          render={cabin => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
