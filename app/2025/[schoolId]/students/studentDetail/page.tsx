"use client";
import * as React from "react";
import { useSearchParams } from "next/navigation";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  TextField,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Grid2 as Grid,
  Stack,
} from "@mui/material";

export default function StudentDetails() {
  const searchParams = useSearchParams();
  const studentId = searchParams.get("studentId");
  React.useEffect(() => {
    if (studentId) {
      console.log(`학생 ID: ${studentId}`); // 콘솔에서 ID 값 확인
    }
  }, [studentId]); // studentId가 변경될 때마다 실행됨

  return (
    <Box sx={{ padding: 2 }} component="form" noValidate autoComplete="off">
      <Box>
        <Typography variant="h5">
          {studentId ? `학생 ID: ${studentId}의 상세 페이지` : "학생 추가"}
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} sx={{ width: "100%" }}>
            <Grid size="grow" sx={{ m: 1 }}>
              <Stack direction="row" spacing={2}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="학생이름"
                  variant="outlined"
                />
                <FormControl fullWidth>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    성별
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="여자"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="남자"
                    />
                  </RadioGroup>
                </FormControl>
              </Stack>
              <TextField
                sx={{ mt: 1 }}
                fullWidth
                id="outlined-basic"
                label="연락처"
                variant="outlined"
              />
            </Grid>
            <Grid size="grow" sx={{ m: 1 }}>
              <Stack direction="row" spacing={2}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    키
                  </InputLabel>
                  <OutlinedInput
                    type="number"
                    id="outlined-adornment-password"
                    endAdornment={
                      <InputAdornment position="end">cm</InputAdornment>
                    }
                    label="키"
                  />
                </FormControl>
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    몸무게
                  </InputLabel>
                  <OutlinedInput
                    type="number"
                    id="outlined-adornment-password"
                    endAdornment={
                      <InputAdornment position="end">kg</InputAdornment>
                    }
                    label="몸무게"
                  />
                </FormControl>
              </Stack>
              <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    어깨
                  </InputLabel>
                  <OutlinedInput
                    type="number"
                    id="outlined-adornment-password"
                    endAdornment={
                      <InputAdornment position="end">cm</InputAdornment>
                    }
                    label="어깨"
                  />
                </FormControl>
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    허리
                  </InputLabel>
                  <OutlinedInput
                    type="number"
                    id="outlined-adornment-password"
                    endAdornment={
                      <InputAdornment position="end">cm</InputAdornment>
                    }
                    label="허리"
                  />
                </FormControl>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
