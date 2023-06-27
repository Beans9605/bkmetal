import { createTheme } from "@mui/material";
import {
  deepPurple,
  purple,
  brown,
  blueGrey,
  grey,
} from "@mui/material/colors";
import { koKR } from "@mui/material/locale";

export const theme = createTheme(
  {
    palette: {
      primary: {
        light: grey[400],
        main: grey[800],
        dark: grey[900],
      },
      secondary: {
        light: brown[400],
        main: brown[500],
        dark: brown[600],
      },
    },
    typography: {
      fontFamily: "SUIT",
    },
  },
  koKR
);
