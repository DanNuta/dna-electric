import styled from "styled-components";

import { theme, displayFlex } from "../../../components/styles/Theme";

export const ElementPersonal = styled.div`
  margin-top: 45px;

  ${theme.breakpoints.up("lg")} {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }

  .img_element {
    display: none;

    ${theme.breakpoints.up("lg")} {
      display: block;
      grid-column: 1/6;
      margin: auto 0;

      img {
        width: 100%;
        height: 615px;
        object-fit: cover;
      }
    }
  }
`;

export const PersonalDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  ${theme.breakpoints.up("lg")} {
    ${displayFlex({ display: "flex", flexDirection: "row", gap: "60px" })}

    flex-wrap: wrap;
    grid-column: 6/13;
    box-shadow: 0px 4px 13px 2px rgba(0, 0, 0, 0.15);
    padding: 90px 100px;
  }
`;
