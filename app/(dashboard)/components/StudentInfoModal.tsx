import * as React from "react";
import clsx from "clsx";
import { styled, css } from "@mui/system";
import { Female, Male } from "@mui/icons-material";
import { StudentInfoModalProp } from "./type";
import {
  Button,
  ButtonGroup,
  Box,
  Divider,
  Modal as BaseModal,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { PurchaseInfoData } from "./type";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const purchaseInfoData: PurchaseInfoData = {
  winterUniform: {
    jacket: {
      size: 100,
      name: "자켓",
      quantity: 1,
      isNew: true,
    },
    blouse: {
      size: 100,
      name: "블라우스",
      quantity: 2,
      isNew: false,
    },
    shirt: { size: 95, name: "셔츠", quantity: 3, isNew: true },
    knitVest: {
      size: 95,
      name: "니트 조끼",
      quantity: 1,
      isNew: false,
    },
    skirt: { size: 71, name: "치마", quantity: 2, isNew: true },
    pants: { size: 74, name: "바지", quantity: 2, isNew: false },
    gymTop: {
      size: 100,
      name: "체육복 상의",
      quantity: 1,
      isNew: true,
    },
    gymPants: {
      size: 100,
      name: "체육복 하의",
      quantity: 1,
      isNew: false,
    },
  },
  summerUniform: {
    blouse: {
      size: 100,
      name: "블라우스",
      quantity: 2,
      isNew: true,
    },
    shirt: { size: 95, name: "셔츠", quantity: 3, isNew: false },
    longPants: {
      size: 74,
      name: "긴 바지",
      quantity: 2,
      isNew: true,
    },
    gymTop: {
      size: 100,
      name: "체육복 상의",
      quantity: 1,
      isNew: false,
    },
    gymPants: {
      size: 100,
      name: "체육복 하의",
      quantity: 1,
      isNew: true,
    },
  },
  namePlate: {
    quantity: 100,
    winterUniform: ["jacket", "blouse", "shirt", "knitVest"],
    summerUniform: ["blouse", "shirt", "longPants", "gymTop"],
  },
  supplies: {
    stockings: {
      flesh: 2,
      feetless: 2,
    },
    underpants: {
      l: 3,
    },
    tshirt: {
      white: {
        95: 5,
        100: 7,
      },
      black: {
        90: 2,
        95: 3,
        100: 4,
      },
    },
  },
};

export default function StudentInfoModal({
  open,
  setOpen,
  studentId,
}: StudentInfoModalProp) {
  const handleClose = React.useCallback(() => {
    setTimeout(() => setOpen(false), 0);
  }, []);
  const StudentInfoData = {
    school: "일신여자고등학교",
    name: "한기선",
    gender: "F",
    StudentPhone: "010.1234,5678",
  };
  const winterUniformRows = Object.entries(purchaseInfoData.winterUniform).map(
    ([key, value]) => ({
      item: key,
      name: value.name,
      size: value.size,
      isNew: value.isNew ? "" : " (이월)",
      quantity: value.quantity,
    }),
  );
  const summerUniformRows = Object.entries(purchaseInfoData.summerUniform).map(
    ([key, value]) => ({
      item: key,
      name: value.name,
      size: value.size,
      isNew: value.isNew ? "" : " (이월)",
      quantity: value.quantity,
    }),
  );
  const suppliesUnderpantsRows = Object.entries(
    purchaseInfoData.supplies?.underpants || {},
  ).map(([key, value]) => ({
    item: key,
    quantity: value,
  }));
  const suppliesTshirtWhiteRows = Object.entries(
    purchaseInfoData.supplies?.tshirt?.white || {},
  ).map(([key, value]) => ({
    item: key,
    quantity: value,
  }));
  const suppliesTshirtBlackRows = Object.entries(
    purchaseInfoData.supplies?.tshirt?.black || {},
  ).map(([key, value]) => ({
    item: key,
    quantity: value,
  }));
  return (
    <div>
      <Modal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        slots={{ backdrop: StyledBackdrop }}
      >
        <Box sx={style} id="unstyled-modal-title" className="modal-title">
          <Stack
            direction="row"
            spacing={2}
            sx={{
              justifyContent: "space-between",
              alignItems: "stretch",
            }}
          >
            <Box sx={{ display: "inline" }}>
              <div>
                {StudentInfoData.school} <br />
                {StudentInfoData.name}
                {StudentInfoData.gender === "M" ? <Male /> : <Female />}
                {StudentInfoData.StudentPhone}
              </div>
            </Box>
            <Box sx={{ display: "inline" }}>
              <ButtonGroup variant="contained" aria-label="Basic button group">
                <Button variant="outlined" onClick={handleClose}>
                  취소
                </Button>
                <Button>결제</Button>
              </ButtonGroup>
            </Box>
          </Stack>
          <Divider />
          <Box id="unstyled-modal-description" className="modal-description">
            <Stack direction="row" spacing={2}>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>동복</TableRow>
                  </TableHead>
                  <TableBody>
                    {winterUniformRows.map((row) => (
                      <TableRow
                        key={row.item}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                          {row.isNew}
                        </TableCell>
                        <TableCell align="right">{row.size}</TableCell>
                        <TableCell align="right">{row.quantity}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>하복</TableRow>
                  </TableHead>
                  <TableBody>
                    {summerUniformRows.map((row) => (
                      <TableRow
                        key={row.item}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                          {row.isNew}
                        </TableCell>
                        <TableCell align="right">{row.size}</TableCell>
                        <TableCell align="right">{row.quantity}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Stack>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableBody>
                  <TableRow
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      명찰
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {purchaseInfoData.namePlate.quantity}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      부착
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {(purchaseInfoData.namePlate.winterUniform?.length || 0) +
                        (purchaseInfoData.namePlate.summerUniform?.length || 0)}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              동복: {purchaseInfoData.namePlate.winterUniform?.join(", ")}{" "}
              <br />
              하복: {purchaseInfoData.namePlate.summerUniform?.join(", ")}
            </TableContainer>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>살색스타킹</TableCell>
                    <TableCell>유발스타킹</TableCell>
                    <TableCell>무발스타킹</TableCell>
                    <TableCell>기모스타킹</TableCell>
                    <TableCell>속바지</TableCell>
                    <TableCell>교복흰티</TableCell>
                    <TableCell>교복검정티</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell align="right">
                      <Stack
                        direction="row"
                        sx={{
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div>one</div>
                        <div>1</div>
                      </Stack>
                    </TableCell>
                    <TableCell align="right">
                      <Stack
                        direction="row"
                        sx={{
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div>one</div>
                        <div>1</div>
                      </Stack>
                    </TableCell>
                    <TableCell align="right">
                      <Stack
                        direction="row"
                        sx={{
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div>one</div>
                        <div>1</div>
                      </Stack>
                    </TableCell>
                    <TableCell align="right">
                      <Stack
                        direction="row"
                        sx={{
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div>one</div>
                        <div>1</div>
                      </Stack>
                    </TableCell>
                    <TableCell align="right">
                      {suppliesUnderpantsRows.map((row) => (
                        <Stack
                          key={row.item}
                          direction="row"
                          sx={{
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <div>{row.item.toUpperCase()}</div>
                          <div>{row.quantity}</div>
                        </Stack>
                      ))}
                    </TableCell>
                    <TableCell align="right">
                      {suppliesTshirtWhiteRows.map((row) => (
                        <Stack
                          key={row.item}
                          direction="row"
                          sx={{
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <div>{row.item.toUpperCase()}</div>
                          <div>{row.quantity}</div>
                        </Stack>
                      ))}
                    </TableCell>
                    <TableCell align="right">
                      {suppliesTshirtBlackRows.map((row) => (
                        <Stack
                          key={row.item}
                          direction="row"
                          sx={{
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <div>{row.item.toUpperCase()}</div>
                          <div>{row.quantity}</div>
                        </Stack>
                      ))}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  이월사은품
                  <TableRow
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      품목
                    </TableCell>
                    <TableCell component="th" scope="row">
                      개수
                    </TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

const Backdrop = React.forwardRef<
  HTMLDivElement,
  { open?: boolean; className: string }
>((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ "base-Backdrop-open": open }, className)}
      ref={ref}
      {...other}
    />
  );
});
Backdrop.displayName = "Backdrop";

const Modal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;
