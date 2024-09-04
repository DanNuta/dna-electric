import styled from "styled-components";
import { Link } from "react-router-dom";

type Props = {
  bg?: string;
  color?: string;
  width?: string;
};

export const LinkElement = styled(Link)<Props>`
  color: ${(props) => props.color};
  background-color: ${(props) => props.bg};
  padding: 12px 22px;
  text-decoration: none;
  text-align: center;
  width: ${(props) => props.width};
`;
