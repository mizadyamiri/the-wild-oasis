import { useCabins } from "./useCabins";
import CabinRow from "./CabinRow";

import Table from "../../ui/Table";
import Spinner from "../../ui/Spinner";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";

function CabinTable() {
  const { cabins, isLoading } = useCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  const filterValue = searchParams.get("discount") || "all";
  let filteredCabins;
  switch (filterValue) {
    case "all":
      filteredCabins = cabins;
      break;
    case "no-discount":
      filteredCabins = cabins.filter(c => c.discount === 0);
      break;
    case "with-discount":
      filteredCabins = cabins.filter(c => c.discount > 0);
      break;
  }

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
          data={filteredCabins}
          render={cabin => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
