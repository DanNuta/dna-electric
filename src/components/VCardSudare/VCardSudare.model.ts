import { style } from '@mui/system'
import styled from 'styled-components'
import { rootColor, Props, displayFlex, theme } from '../styles/Theme'

export const BoxSudare = styled.div`
  display: none;

  ${theme.breakpoints.up('lg')} {
    display: block;
  }
  box-shadow: 2px 2px 6px 2px rgba(0, 0, 0, 0.08);
  height: 290px;
  position: relative;
  width: 340px;
  cursor: pointer;
  background-color: white;

  img {
    width: 100%;
    height: 100%;
  }

  .hover_Element {
    display: none;
  }

  &:hover .hover_Element {
    display: block;
    background-color: rgba(255, 214, 0, 0.8);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`

export const IconElement = styled.div`
  height: 100%;

  ${displayFlex({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '30px',
  })}
`

export const Icon = styled.span`
  width: 66px;
  height: 66px;
  border-radius: 100px;
  background-color: ${rootColor.secondary};
  padding: 10px;

  ${displayFlex({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  })}

  img {
    width: 70%;
  }
`
