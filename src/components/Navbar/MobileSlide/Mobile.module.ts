import { Link } from 'react-router-dom'
import styled from 'styled-components'

type Props = {
  state?: boolean
  type?: string
  color?: string
}

export const MobileStyled = styled.div<Props>`
  position: relative;
`

export const MolobleUl = styled.ul``

export const MobileLi = styled.li<Props>`
  position: absolute;
  right: 0;
`

export const MobileLiElement = styled.li<Props>`
  margin-top: 2.5rem;
  color: ${(props) => (props.color === 'yolow' ? '#FFD600' : 'white')};
  font-weight: bold;

  a {
    color: white;
  }
`

export const MobileDiv = styled.div`
  display: flex;
  gap: 25px;
`
