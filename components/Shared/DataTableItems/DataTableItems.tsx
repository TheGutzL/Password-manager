import { columns } from "./columns";
import { DataTable } from "./data-table";
import { DataTableItemsProps } from "./DataTableItems.types";

const DataTableItems = ({ elements }: DataTableItemsProps) => {
  return (
    <div className="py-10">
      <DataTable
        columns={columns}
        data={elements}
      />
    </div>
  );
};

export default DataTableItems;
