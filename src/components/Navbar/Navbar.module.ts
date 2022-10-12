import styled from "styled-components";
import { device } from "../styles/Breackpoints";
import {theme} from "../styles/Theme";


type Props = {
    type?: string,
    bg?: string,
    state?: string,
    active?: string,
    display?: string,
    height?: string,
    alignItems?: string,
    justifyContent?: string,
    flexDirection?: string,
    center?: string,
    gap?: string
}


const displayFlex = (props: Props) =>`
  ${props.display && `display: ${props.display}`};
  ${props.alignItems && `align-items: ${props.alignItems}`} ;
  ${props.flexDirection && `flex-direction: ${props.flexDirection}`};
  ${props.justifyContent && `justify-content: ${props.justifyContent}`};
  ${props.gap && `gap: ${props.gap}`};
`;



export const NavbarNav = styled.nav<Props>`
  position: relative;
  padding: 1.5rem;
  z-index: 10;
  background-color: ${(props) => props.bg};

  ${theme.breakpoints.up("lg")}{
  display: ${props => props.display};
}
`;


export const NavbarUl = styled.ul<Props>`
  display: flex;
  justify-content: ${(props) => props.type === "center" ? "center" : "space-between"};
  align-items: center;
`;




export const NavLi = styled.li<Props>`
 color: white;

 img{
  cursor: pointer;
 }
`;




export const NavMobile = styled.div`

`;


export const MobileNavDiv = styled.div<Props>`
position: absolute;
padding: 10px 47px ;
top: 0;
bottom: -2600%;
right: 0;
left: 0;
backdrop-filter: blur(10px);
background-color: rgba(39, 39, 39, 0.6);
z-index: 999;
transform: ${props => props.active ? "translateX(-100%)" : "ranslateX(0)"};
transition: .5s;

${theme.breakpoints.up("lg")}{
  display: none;
}

`;






export const TabletNav = styled.nav<Props>`


display: none;


${theme.breakpoints.up("lg")}{
  padding:0 1rem;
  background-color: ${props => props.bg};
  ${displayFlex({display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem"})};
  height: 110px;
  
}
`;





export const TabletUl = styled.ul<Props>`

${displayFlex({display: "flex", alignItems: "center"})};
gap: ${props => props.gap};

li{
  color: white;
  
  a{
    color: white;
  }
}
`