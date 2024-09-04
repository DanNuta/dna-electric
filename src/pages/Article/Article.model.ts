import styled from "styled-components";

import { rootColor, theme } from "../../components/styles/Theme";

type Props = {
  sm?: string;
  lg?: string;
};

export const H1 = styled.h1<Props>`
  margin-top: 51px;
  font-size: ${(props) => props.sm};
  color: ${rootColor.secondary};

  ${theme.breakpoints.up("lg")} {
    font-size: ${(props) => props.lg};
  }
`;
