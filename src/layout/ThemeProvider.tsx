import React, { PropsWithChildren } from "react";
import { ThemeProvider as ThemeProviderMui, createTheme } from "@mui/material";

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFD600"
      }
    }
  });

  return <ThemeProviderMui theme={theme}>{children}</ThemeProviderMui>;
};
