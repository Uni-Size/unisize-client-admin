import React from "react";
import { Female, Male } from "@mui/icons-material";
export default function useGenderIcon(params: string) {
  switch (params) {
    case "M":
      return <Male />;
    case "F":
      return <Female />;
    default:
      return "성별확인필요";
  }
}
