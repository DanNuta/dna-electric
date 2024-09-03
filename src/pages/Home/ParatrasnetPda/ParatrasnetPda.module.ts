import styled, { StyleSheetManager } from 'styled-components'
import { theme } from '../../../components/styles/Theme'

type Props = {
  display?: string
}
export const DivElement = styled.div`
  ${theme.breakpoints.up('lg')} {
  }

  .title {
    margin: 45px 0 35px 0;
  }

  .img_desc {
    margin: 20px 0 10px 0;
  }
`

export const FlexElementDiv = styled.div`
  ${theme.breakpoints.up('lg')} {
    display: flex;
    gap: 120px;
  }

  .desc_title {
    margin-bottom: 20px;
  }
`

export const OverlayImg = styled.div<Props>`
  display: ${(props) => props.display};
  ${theme.breakpoints.up('lg')} {
    display: ${(props) => props.display};
  }

  .img_element {
    width: 231px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .yollow {
      position: absolute;
      top: 0;
      width: 80%;
      height: 70%;
      background-color: #ffd600;
      top: 50%;
      transform: translateY(-50%);
      right: -40px;
      z-index: -1;
    }
  }
`
