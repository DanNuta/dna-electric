import styled from "styled-components";

import { theme } from "../../components/styles/Theme";

export const ImpamantareDiv = styled.div``;

export const ProductsDiv = styled.div`
  width: 90%;
  margin: 45px auto 0 auto;

  ${theme.breakpoints.up("lg")} {
    width: 100%;
  }

  .filter_item {
    display: none;

    ${theme.breakpoints.up("lg")} {
      display: block;
    }
  }

  .title_page {
    ${theme.breakpoints.up("lg")} {
      margin-bottom: 55px;
    }
  }
`;

export const FilterDiv = styled.div`
  margin: 26px 0 31px 0;
  display: block;

  ${theme.breakpoints.up("lg")} {
    display: none;
  }

  .filter {
    border: 1px solid rgba(39, 39, 39, 1);
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px 20px;
    margin-top: 30px;
    transition: all 0.5s;
  }

  ul {
    display: flex;
    gap: 10px;
    align-items: center;

    ${theme.breakpoints.up("lg")} {
      display: none;
    }

    li {
      img {
        width: 15px;
      }
    }
  }
`;

export const FilterDesktop = styled.div`
  display: none;

  ${theme.breakpoints.up("lg")} {
    display: block;
    border: 1px solid #272727;
    padding: 30px 0 20px 20px;

    h2 {
      margin-bottom: 20px;
    }
  }
`;
