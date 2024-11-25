"use client";
import * as React from "react";
import { Button, Chip, Box } from "@mui/material";
import { Female, Male } from "@mui/icons-material";
import StudentInfoModal from "./components/StudentInfoModal";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridCellParams,
} from "@mui/x-data-grid";
const rows: GridRowsProp = [
  {
    id: 1,
    col1: "일신여자고등학교",
    col2: "한기선",
    col3: "010.4810.2606",
    col4: "F",
    col5: "사이즈 측정 중",
    col6: 1234,
  },
];

export default function HomePage() {
  const [open, setOpen] = React.useState<boolean | null>(null);
  const [studentId, setStudentId] = React.useState<number | null>(null);
  React.useEffect(() => {
    setOpen(false);
  }, []);

  const renderSchoolCell = React.useCallback((params: GridCellParams) => {
    const value = params.value as string;
    return value;
  }, []);
  const renderNameCell = React.useCallback((params: GridCellParams) => {
    const value = params.value as string;
    return value;
  }, []);
  const renderStudentPhoneCell = React.useCallback((params: GridCellParams) => {
    const value = params.value as number;
    return value;
  }, []);
  const renderGenderCell = React.useCallback((params: GridCellParams) => {
    const value = params.value as string;
    return value === "M" ? <Male /> : <Female />;
  }, []);
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
  const renderPriceCell = React.useCallback((params: GridCellParams) => {
    const value = params.value as number;
    return `${value.toLocaleString()}원`;
  }, []);
  const handleOpenModal = (id: number) => {
    setOpen(true);
    setStudentId(id);
    console.log(id);
  };
  const columns: GridColDef[] = React.useMemo(
    () => [
      {
        field: "col1",
        headerName: "학교",
        width: 150,
        renderCell: renderSchoolCell,
      },
      { field: "col2", headerName: "이름", renderCell: renderNameCell },
      {
        field: "col3",
        headerName: "전화번호",
        width: 150,
        renderCell: renderStudentPhoneCell,
      },
      {
        field: "col4",
        headerName: "성별",
        width: 80,
        renderCell: renderGenderCell,
      },
      {
        field: "col5",
        headerName: "진행",
        width: 150,
        renderCell: renderUniformCell,
      },
      {
        field: "col6",
        headerName: "추가결제금액",
        width: 150,
        renderCell: renderPriceCell,
      },
      {
        field: "col7",
        headerName: "상세",
        renderCell: (params: GridCellParams) => {
          return (
            <Button
              variant="contained"
              onClick={() => handleOpenModal(params.row.id)}
            >
              상세
            </Button>
          );
        },
      },
    ],
    [renderGenderCell]
  );
  return (
    <div>
      {open !== null && open && (
        <StudentInfoModal open={open} setOpen={setOpen} studentId={studentId} />
      )}
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
