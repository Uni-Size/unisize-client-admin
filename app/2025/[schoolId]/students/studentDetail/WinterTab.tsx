import {
  Stack,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import React, { useState } from "react";
import { Add } from "@mui/icons-material";
import Image from "next/image";

function createUniformData(
  uniform: string,
  size: number,
  quantity: number,
  orderCount?: number,
) {
  return { uniform, size, quantity, orderCount };
}
function createAccData(name: string, size: string, quantity: number) {
  return { name, size, quantity };
}
const UniformRows = [createUniformData("Frozen yoghurt", 159, 6.0, 1)];
const NameTagRows = [1, 2, 3, 4, 5];
const AccRows = [createAccData("Frozen yoghurt", "size", 159)];

export default function WinterTab({ data }: any) {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };
  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Typography variant="caption" gutterBottom>
          결제일
        </Typography>
        <List component="nav" aria-label="secondary mailbox folder">
          <Stack direction="row">
            <ListItemButton
              sx={{ height: 44 }}
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemText primary="Trash" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <Add />
            </ListItemButton>
          </Stack>
        </List>
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Box>
          <Typography variant="body2" gutterBottom>
            교복 {data.price.toLocaleString("ko-KR")}원
          </Typography>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableBody>
                {UniformRows.map((row) => (
                  <TableRow
                    key={row.uniform}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {row.uniform}
                    </TableCell>
                    <TableCell align="right">{row.size}</TableCell>
                    <TableCell align="right">{row.quantity}</TableCell>
                    <TableCell align="right">{row.orderCount}차</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box>
          <Typography variant="body2" gutterBottom>
            명찰 {data.price.toLocaleString("ko-KR")}원
          </Typography>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableBody>
                {NameTagRows.map((row) => (
                  <TableRow
                    key={row}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {row ? row : "-"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box>
          <Typography variant="body2" gutterBottom>
            용품 {data.price.toLocaleString("ko-KR")}원
          </Typography>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableBody>
                {AccRows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.size}</TableCell>
                    <TableCell align="right">{row.quantity}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box>
          <Typography variant="body2" gutterBottom>
            수령 사인
          </Typography>
          <Box>
            <Image
              src="/profile.png"
              width={60}
              height={60}
              alt="Picture of the author"
            />
          </Box>
        </Box>
      </Stack>
    </>
  );
}
