"use client";
import React, { useEffect, useState } from "react";
import PageTitle from "@/components/layouts/PageTitle";
import SearchLayout from "@/components/layouts/search-layout";
import { useRouter } from "next/navigation";
import style from "./style.module.scss";
import ListLayout from "@/components/layouts/list-layout";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Button from "@/components/asset/button/Button";
import { School } from "../api/getDummy/route";
import useYears from "@/hooks/useYears";
const getDummy = async (): Promise<School[]> => {
  const response = await fetch("/api/getDummy");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const columnHelper = createColumnHelper<School>();

const columns = [
  columnHelper.accessor("id", {
    header: "번호",
    cell: (info) => info.getValue(),
    size: 50,
  }),
  columnHelper.accessor("school", {
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
    cell: (info) => (
      <Button onClick={() => console.log(info.getValue())}>
        {info.getValue()}
      </Button>
    ),
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
  const [data, setData] = useState<School[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const yearsArr = useYears();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getDummy();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handlerClickTitleBTN = () => {
    router.push("/student/add");
  };

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

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
            {yearsArr.map((year) => (
              <label key={year}>
                <input type="checkbox" name="year" value={year} />
                {year}
              </label>
            ))}
          </div>
        </div>
      </SearchLayout>
      <ListLayout searchTotal={data.length}>
        <div>
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
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ListLayout>
    </>
  );
}
