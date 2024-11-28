"use client";
import { use, useState, useEffect } from "react";
import {
  DataGrid,
  GridToolbar,
  GridRowsProp,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import useGenderIcon from "@/app/customHooks/useGenderIcon";

const rows: GridRowsProp = [
  {
    id: 1,
    studentName: "일신여자고등학교",
    studentPhone: "한기선",
    Gender: "F",
    VisitDate: "F",
    AddPayment: "사이즈 측정 중",
    ReceiptWinterUniform: 1234,
    ReceiptSummerUniform: 1234,
  },
];

export default function SchoolDetails({
  params, // 동적 세그먼트
  searchParams, // 쿼리스트링
}: {
  params: Promise<{ schoolId: string }>;
  searchParams: Promise<{ plot?: string }>;
}) {
  const GenderIconCell = (params: GridRenderCellParams) => {
    const icon = useGenderIcon(params.value);
    return <>{icon}</>;
  };

  return (
    <div style={{ width: "100%" }}>
      <div style={{ height: 300, width: "100%" }}>
        <DataGrid
          columns={[
            {
              field: "id",
              headerName: "번호",
              width: 80,
            },
            {
              field: "studentName",
              headerName: "학생이름",
            },
            {
              field: "studentPhone",
              headerName: "전화번호",
            },
            {
              field: "Gender",
              headerName: "성별",
              width: 80,
              renderCell: (params: GridRenderCellParams) => (
                <GenderIconCell {...params} />
              ),
            },
            {
              field: "VisitDate",
              headerName: "사이즈 측정일",
            },
            {
              field: "AddPayment",
              headerName: "추가 결제금액",
            },
            {
              field: "ReceiptWinterUniform",
              headerName: "동복 수령",
            },
            {
              field: "ReceiptSummerUniform",
              headerName: "하복 수령",
            },
          ]}
          rows={rows}
          slots={{ toolbar: GridToolbar }}
        />
      </div>
    </div>
  );
}
