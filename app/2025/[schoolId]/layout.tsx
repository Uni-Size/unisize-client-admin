"use client";
import * as React from "react";
import { use, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Box, Tabs, Tab } from "@mui/material";
export default function SchoolDetails({
  children,
  params, // 동적 세그먼트
}: {
  children: React.ReactNode;
  params: Promise<{ schoolId: string }>;
}) {
  const router = useRouter();
  const { schoolId } = use(params);
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        router.push(`/2025/${schoolId}/students`);
        break;
      case 1:
        router.push(`/2025/${schoolId}/order`);
        break;
      default:
        router.push(`/2025/${schoolId}/students`);
    }
  };

  return (
    <>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="학생" />
          <Tab label="주문현황" />
        </Tabs>
      </Box>
      {children}
    </>
  );
}
