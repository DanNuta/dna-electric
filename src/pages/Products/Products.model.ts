/* eslint-disable max-lines */
import styled from "styled-components";
import { theme } from "../../components/styles/Theme";

type Props = {
  display?: string;
  height?: string;
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
  center?: string;
  gap?: string;
};

const FlexFn = (props: Props) => `
    ${props.display && `display: ${props.display}`};
    ${props.alignItems && `align-items: ${props.alignItems}`} ;
    ${props.flexDirection && `flex-direction: ${props.flexDirection}`};
    ${props.justifyContent && `justify-content: ${props.justifyContent}`};
    ${props.gap && `gap: ${props.gap}`};

`;

export const ItemProductsDiv = styled.div`
  width: 90%;
  margin: 45px auto 0 auto;

  ${theme.breakpoints.up("md")} {
    display: flex;
    gap: 1.5rem;
    width: 100%;
  }

  .title {
    ${theme.breakpoints.up("md")} {
      display: none;
    }
  }
`;

export const ImgSlider = styled.div`
  background-color: #f8f8f8;
  box-shadow: -2px 2px 12px 2px rgba(0, 0, 0, 0.1);
  position: relative;
  height: 280px;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  position: relative;

  ${theme.breakpoints.up("md")} {
    width: 50%;
    height: 500px;
    margin: 0;
  }

  img {
    position: absolute;
    height: 100%;

    ${theme.breakpoints.up("md")} {
      position: relative;
      height: 100%;
    }
  }

  .btn {
    z-index: 10;
    position: relative;
    height: 100%;
    width: 100%;

    ${theme.breakpoints.up("md")} {
      position: absolute;
    }

    .prev {
    }

    .next {
      position: absolute;
      right: 0;
      z-index: -10;
    }
  }
`;

export const InfoDiv = styled.div`
  ${theme.breakpoints.up("md")} {
    width: 50%;
  }
`;

export const DescriereDiv = styled.div`
  .hr_element {
    ${theme.breakpoints.up("lg")} {
      margin: 30px 0;
    }
  }

  .title {
    display: none;

    ${theme.breakpoints.up("md")} {
      display: block;
    }
  }
  p {
    margin: 10px 0 20px 0;
  }
`;

export const ContactShoWishlistDiv = styled.div`
  margin-top: 20px;
  ${FlexFn({ display: "flex", flexDirection: "column" })}

  ul {
    .shop_class {
      ${theme.breakpoints.up("lg")} {
        display: flex;
        justify-content: center;
        gap: 10px;
        font-weight: lighter;
      }
    }

    ${FlexFn({ display: "flex", justifyContent: "space-between" })}

    ${theme.breakpoints.up("lg")} {
      justify-content: flex-start;
      gap: 50px;
    }

    margin-top: 20px;
    li {
      cursor: pointer;
      display: flex;

      ${FlexFn({ display: "flex", alignItems: "center", gap: "5px" })}

      img {
        width: 15px;
      }
    }
  }
`;

export const ProduseSimilareDiv = styled.div`
  width: 90%;
  margin: 45px auto;

  ${theme.breakpoints.up("lg")} {
    margin-top: 115px;
    width: 100%;
  }

  .title {
    margin-bottom: 30px;
  }
`;

export const CalitateDiv = styled.div`
  width: 90%;
  margin: auto;
  border: 1px solid rgba(39, 39, 39, 0.1);
  text-align: center;
  padding: 20px 16px;

  ${theme.breakpoints.up("md")} {
    width: 100%;
    margin: 0;
  }

  img {
    width: 60%;
    margin-bottom: 25px;
  }

  h5 {
    margin-bottom: 10px;
  }
`;

export const Button = styled.button<Props>`
  display: ${(props) => props.display};
`;
