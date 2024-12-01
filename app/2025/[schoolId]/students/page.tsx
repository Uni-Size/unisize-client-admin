"use client";
import * as React from "react";
import { use, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Chip } from "@mui/material";
import Link from "next/link";
import {
  DataGrid,
  GridToolbar,
  GridRowsProp,
  GridCellParams,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import useGenderIcon from "@/app/customHooks/useGenderIcon";
import { Settings } from "@mui/icons-material";
const rows: GridRowsProp = [
  {
    id: 1,
    studentName: "일신여자고등학교",
    studentPhone: "한기선",
    Gender: "F",
    VisitDate: "F",
    AddPayment: "사이즈 측정 중",
    ReceiptWinterUniform: "확정",
    ReceiptSummerUniform: "확정",
  },
  {
    id: 2,
    studentName: "일신여자고등학교",
    studentPhone: "한기선",
    Gender: "F",
    VisitDate: "F",
    AddPayment: "사이즈 측정 중",
    ReceiptWinterUniform: "확정",
    ReceiptSummerUniform: "확정",
  },
];

export default function StudentsList({
  params, // 동적 세그먼트
}: {
  params: Promise<{ schoolId: string }>;
}) {
  const router = useRouter();
  const { schoolId } = use(params);

  const GenderIconCell = (params: GridRenderCellParams) => {
    const icon = useGenderIcon(params.value);
    return <>{icon}</>;
  };
  const handleStudentClick = (studentId: number) => {
    router.push(
      `/2025/${schoolId}/students/studentDetail?studentId=${studentId}`,
    );
  };
  const renderUniformCell = React.useCallback((params: GridCellParams) => {
    const value = params.value as string;
    switch (value) {
      case "사이즈 측정 중":
        return (
          <Chip label="사이즈 측정 중" color="primary" variant="outlined" />
        );
      case "확정":
        return <Chip label="확정" color="primary" variant="outlined" />;
      case "결제대기":
        return <Chip label="결제대기" color="primary" variant="outlined" />;
    }
  }, []);
  return (
    <div style={{ width: "100%" }}>
      <div style={{ height: 300, width: "100%" }}>
        <DataGrid
          columns={[
            {
              field: "detail",
              headerName: "상세",
              width: 80,
              renderCell: (e) => {
                const studentId = e.row.id;
                return (
                  <Settings onClick={() => handleStudentClick(studentId)} />
                );
              },
            },
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
              renderCell: renderUniformCell,
            },
            {
              field: "ReceiptSummerUniform",
              headerName: "하복 수령",
              renderCell: renderUniformCell,
            },
          ]}
          rows={rows}
          slots={{ toolbar: GridToolbar }}
        />
      </div>
    </div>
  );
}
