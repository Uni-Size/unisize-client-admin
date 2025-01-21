"use client";
import React, { useState } from "react";
import PageTitle from "@/components/layouts/PageTitle";
import SearchLayout from "@/components/layouts/SearchLayout";
import { useRouter } from "next/navigation";
import style from "./style.module.scss";
import ListLayout from "@/components/layouts/ListLayout";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Button from "@/components/asset/Button";

type School = {
  id: number;
  schoolName: string;
  createdAt: string;
  updatedAt: string;
  stock: number;
};

const mockSchoolData: School[] = [
  {
    id: 1,
    schoolName: "용성중학교",
    createdAt: "2024-01-15",
    updatedAt: "2024-01-20",
    stock: 150,
  },
  {
    id: 2,
    schoolName: "가경중학교",
    createdAt: "2024-01-10",
    updatedAt: "2024-01-18",
    stock: 200,
  },
  {
    id: 3,
    schoolName: "생명중학교",
    createdAt: "2024-01-05",
    updatedAt: "2024-01-21",
    stock: 175,
  },
];

const columnHelper = createColumnHelper<School>();

const columns = [
  columnHelper.accessor("id", {
    header: "번호",
    cell: (info) => info.getValue(),
    size: 50,
  }),
  columnHelper.accessor("schoolName", {
    header: "학교명",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("createdAt", {
    header: "등록일",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("updatedAt", {
    header: "수정일",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("stock", {
    header: "재고",
    cell: (info) => info.getValue(),
  }),
  columnHelper.display({
    id: "actions",
    header: "관리",
    size: 80,
    cell: () => <Button>수정</Button>,
  }),
];

export default function Page() {
  const router = useRouter();
  const handlerClickTitleBTN = () => {
    router.push("/student/add");
  };
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => currentYear - 3 + i);

  const [data, _setData] = useState(() => [...mockSchoolData]);

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
    <>
      <PageTitle
        title="학생조회"
        btnText="학생등록"
        handlerOnClickBTN={handlerClickTitleBTN}
      />
      <SearchLayout>
        <div>
          <h4>검색어</h4>
          <div>
            <input />
          </div>
        </div>
        <div>
          <h4>주관구매</h4>
          <div className={style.search__checkbox}>
            {years.map((year) => (
              <label key={year}>
                <input type="checkbox" name="year" value={year} />
                {year}
              </label>
            ))}
          </div>
        </div>
      </SearchLayout>
      <ListLayout searchTotal={10}>
        <div>
          <table
            style={{
              width: `100%`,
            }}
          >
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
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            <tfoot>
              {table.getFooterGroups().map((footerGroup) => (
                <tr key={footerGroup.id}>
                  {footerGroup.headers.map((header) => (
                    <th key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.footer,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </tfoot>
          </table>
        </div>
      </ListLayout>
    </>
  );
}
