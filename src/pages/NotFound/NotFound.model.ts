import { Container } from '@mui/system'
import styled from 'styled-components'
import { rootColor, theme, displayFlex } from '../../components/styles/Theme'

type Props = {
  sm?: string
  lg?: string
}

export const ContainerElement = styled(Container)`
  ${displayFlex({
    display: 'flex !important',
    justifyContent: 'center !important',
    alignItems: 'center !important',
    flexDirection: 'column',
  })}

  width: 100% !important;

  p {
    font-size: 15px;
    margin-top: 12px;

    ${theme.breakpoints.up('lg')} {
      font-size: 30px;
    }
  }
`

export const Span = styled.span`
  color: ${rootColor.primary};
`

export const H1 = styled.h1<Props>`
  margin-top: 51px;
  font-size: ${(props) => props.sm};
  color: ${rootColor.secondary};

  ${theme.breakpoints.up('lg')} {
    font-size: ${(props) => props.lg};
  }
`
