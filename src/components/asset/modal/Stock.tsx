import { useState } from "react";
import ModalLayout from "./layout";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("id", {
    header: "상품코드",
    cell: (info) => info.getValue(),
    size: 100,
  }),
  columnHelper.accessor("name", {
    header: "상픔명",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("stock", {
    header: "재고",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("availableStock", {
    header: "가용재고",
    cell: (info) => info.getValue(),
  }),
];

export default function Stock() {
  const [data, setData] = useState([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 20,
      },
    },
  });

  return (
    <ModalLayout>
      현재 재고
      <table style={{ width: "100%" }}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  style={{
                    width: `${
                      (header.getSize() / table.getTotalSize()) * 100
                    }%`,
                  }}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  style={{
                    width: `${
                      (cell.column.getSize() / table.getTotalSize()) * 100
                    }%`,
                    textAlign: "center",
                  }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </ModalLayout>
  );
}
