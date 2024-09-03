import styled from 'styled-components'
import { theme } from '../../../components/styles/Theme'

export const EtapeleDeLucruDiv = styled.div`
  margin-top: 46px;
  display: flex;
  align-items: center;
  flex-direction: column;

  ${theme.breakpoints.up('lg')} {
  }

  .title {
    margin-bottom: 30px;
    text-align: start;
    width: 100%;
  }
`

export const EtapeleLucruItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;

  ${theme.breakpoints.up('lg')} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 90px;
  }

  .title_img {
    text-align: center;
    ${theme.breakpoints.up('lg')} {
      width: 35%;
    }
  }

  .img {
    margin-top: 20px;
    width: 100%;

    background-color: red;

    ${theme.breakpoints.up('lg')} {
      width: 940px;
      height: 410px;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
`
