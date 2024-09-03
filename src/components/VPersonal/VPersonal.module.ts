import styled from 'styled-components'
import { theme } from '../../components/styles/Theme'

export const PersonalDiv = styled.div`
  ${theme.breakpoints.up('lg')} {
    width: 45%;
  }

  text-align: center;

  .h1 {
    margin: 15px 0 10px 0;
  }

  p {
    margin-bottom: 20px;
  }

  img {
    width: 100%;
  }
`
