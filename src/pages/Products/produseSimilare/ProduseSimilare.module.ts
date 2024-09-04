import styled from "styled-components";

import { theme, rootColor } from "../../../components/styles/Theme";

export const ProduseSimilareDiv = styled.div`
  background: #f8f8f8;
  box-shadow: -2px 2px 12px 2px rgba(0, 0, 0, 0.1);

  .hoverElement {
    display: none;
    transition: 0.5s ease;
    cursor: pointer;
  }

  ${theme.breakpoints.up("lg")} {
    position: relative;

    &:hover .hoverElement {
      position: absolute;
      background-color: ${rootColor.secondary};
      color: white;
      width: 100%;
      bottom: 0%;
      transition: all 0.5s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      gap: 20px;
    }
  }
  .img {
    display: flex;
    justify-content: center;
    height: 115px;

    ${theme.breakpoints.up("lg")} {
      height: 340px;
    }
    img {
      height: 100%;

      ${theme.breakpoints.up("lg")} {
        object-fit: cover;
        max-width: 340px;
      }
    }
  }

  .text_hover {
    padding: 8px;
    height: 70px;

    ${theme.breakpoints.up("lg")} {
      height: 110px;
      padding: 20px;
    }
  }
`;
