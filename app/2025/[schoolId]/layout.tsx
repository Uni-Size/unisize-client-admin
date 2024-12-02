"use client";
import * as React from "react";
import { use, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Box, Tabs, Tab } from "@mui/material";
export default function SchoolDetails({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ schoolId: string }>;
}) {
  const router = useRouter();
  const { schoolId } = use(params);
  const [value, setValue] = React.useState(0);

  return (
    <>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs
          value={value}
          onChange={(_, newValue: number) => {
            setValue(newValue);
          }}
        >
          <Tab
            label="학생 리스트"
            onClick={() => {
              router.push(`/2025/${schoolId}/students`);
            }}
          />
          <Tab
            label="주문현황"
            onClick={() => {
              router.push(`/2025/${schoolId}/orders`);
            }}
          />
        </Tabs>
      </Box>
      {children}
    </>
  );
}
