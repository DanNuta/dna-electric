import styled from 'styled-components'
import { theme, rootColor, displayFlex } from '../../../components/styles/Theme'

export const FiiinSiguranta = styled.div`
  margin-top: 45px;

  h1 {
    margin-bottom: 30px;
  }

  .descrition_button {
    margin-top: 20px;
  }

  ${theme.breakpoints.up('lg')} {
    display: none;
  }
`

export const DisplayImgP = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: relative;
  gap: 0 20px;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
`

export const BoxYollow = styled.div`
  padding: 15px 21px;
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 80%;
  right: 0;
  background-color: ${rootColor.primary};
`

export const DesktopElement = styled.section`
  display: none;

  ${theme.breakpoints.up('lg')} {
    margin-top: 170px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 400px 500px;
    gap: 20px;
  }
`

export const RightElement = styled.div`
  ${theme.breakpoints.up('lg')} {
    grid-column: 1/5;
    grid-row: 1/3;

    img {
      width: 100%;
      margin-bottom: 40px;
      height: 700px;
    }
  }
`

export const TitleDesc = styled.div`
  display: none;

  ${theme.breakpoints.up('lg')} {
    display: block;
    grid-column: 5/13;
    grid-row: 1;
    margin-top: 50px;

    h1 {
      margin-bottom: 50px;
    }

    p {
      margin-bottom: 40px;
    }
  }
`

export const RightImg = styled.div`
  display: none;

  ${theme.breakpoints.up('lg')} {
    display: block;
    grid-column: 6/13;
    grid-row: 2;

    .img {
      position: relative;
      height: 400px;
      img {
        width: 100%;
        height: 100%;
        // object-fit: cover;
      }
    }
  }
`

export const BoxElement = styled.div`
  display: none;

  ${theme.breakpoints.up('lg')} {
    display: block;
    position: absolute;
    top: -105px;
    right: 43px;
    width: 280px;
    height: 140px;
    background-color: ${rootColor.primary};
    ${displayFlex({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    })};

    padding: 20px;
    text-align: center;
  }
`
