import { columns } from "./columns";
import { DataTable } from "./data-table";
import { TableDataProps } from "./TableDataProps.types";

const TableData = ({ elements }: TableDataProps) => {
  return (
    <div className="py-10">
      <DataTable
        columns={columns}
        data={elements}
      />
    </div>
  );
};

export default TableData;
