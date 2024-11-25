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
    jacket: { size: 100, quantity: 1, isNew: true },
    blouse: { size: 100, quantity: 2, isNew: false },
    shirt: { size: 95, quantity: 3, isNew: true },
    knitVest: { size: 95, quantity: 1, isNew: false },
    skirt: { size: 71, quantity: 2, isNew: true },
    pants: { size: 74, quantity: 2, isNew: false },
    gymTop: { size: 100, quantity: 1, isNew: true },
    gymPants: { size: 100, quantity: 1, isNew: false },
  },
  summerUniform: {
    blouse: { size: 100, quantity: 2, isNew: true },
    shirt: { size: 95, quantity: 3, isNew: false },
    longPants: { size: 74, quantity: 2, isNew: true },
    gymTop: { size: 100, quantity: 1, isNew: false },
    gymPants: { size: 100, quantity: 1, isNew: true },
  },
  namePlate: {
    namePlate: 100,
    attachedArray: {
      winterUniform: ["jacket", "blouse", "shirt", "knitVest"],
      summerUniform: ["blouse", "shirt", "longPants", "gymTop"],
    },
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
function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const winterUniformRows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
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
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
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
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>동복</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
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
