import {
  Stack,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
export default function WinterTab() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [value, setValue] = React.useState<Dayjs | null>(dayjs("2022-04-17"));

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
          </Stack>
        </List>
      </Stack>
    </>
  );
}
