import React, { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import * as Style from './VLink.model'

type Props = {
  link: string
  bg?: string
  color?: string
  onClick?: () => void
  width?: string
}
export const LinkView: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  return (
    <Style.LinkElement
      width={props.width}
      onClick={props.onClick}
      color={props.color}
      bg={props.bg}
      to={props.link}
    >
      {props.children}
    </Style.LinkElement>
  )
}
