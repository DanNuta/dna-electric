import { createTheme } from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  }
});

export const rootColor = {
  primary: "#FFD600",
  secondary: "#272727"
};

export type Props = {
  display?: string;
  height?: string;
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
  gap?: string;
};

export const displayFlex = (props: Props) => `
  ${props.display && `display: ${props.display}`};
  ${props.alignItems && `align-items: ${props.alignItems}`} ;
  ${props.flexDirection && `flex-direction: ${props.flexDirection}`};
  ${props.justifyContent && `justify-content: ${props.justifyContent}`};
  ${props.gap && `gap: ${props.gap}`};
`;
