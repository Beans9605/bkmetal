import { createTheme } from "@mui/material";
import { deepPurple, purple, brown, blueGrey } from "@mui/material/colors";
import { koKR } from "@mui/material/locale";

export const theme = createTheme(
  {
    palette: {
      primary: {
        light: brown[400],
        main: brown[700],
        dark: brown[900],
      },
      secondary: {
        light: brown[400],
        main: brown[500],
        dark: brown[600],
      },
    },
    typography: {
      fontFamily: "Pretendard",
    },
  },
  koKR
);
