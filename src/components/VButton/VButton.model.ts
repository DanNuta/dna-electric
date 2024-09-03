import styled from 'styled-components'
import { device } from '../styles/Breackpoints'

type ButtonProps = {
  bg?: string
  padding?: string
  color?: string
}

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => (props.bg ? props.bg : 'transparent')};
  padding: ${(props) => (props.padding ? 0 : '15px 23px')};
  border: none;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  color: ${(props) => props.color && props.color};

  @media ${device.laptop} {
    display: none;
  }
`
