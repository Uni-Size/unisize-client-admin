"use client";
import * as React from "react";
import { useSearchParams } from "next/navigation"; // 쿼리 파라미터 가져오기
import { Box, Typography } from "@mui/material";

export default function StudentDetails() {
  const searchParams = useSearchParams();
  const studentId = searchParams.get("studentId");
  React.useEffect(() => {
    if (studentId) {
      console.log(`학생 ID: ${studentId}`); // 콘솔에서 ID 값 확인
    }
  }, [studentId]); // studentId가 변경될 때마다 실행됨

  return (
    <Box sx={{ padding: 2 }}>
      <Box>
        <Typography variant="h5">
          {studentId ? `학생 ID: ${studentId}의 상세 페이지` : "학생 추가"}
        </Typography>
      </Box>
    </Box>
  );
}
