import React, { PropsWithChildren } from 'react'
import * as Styled from './VButton.model'

type Props = {
  onClick?: (e: any) => void
  style?: string
  padding?: string
  color?: string
}

export const VButtonView: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  return (
    <Styled.Button
      color={props.color}
      padding={props.padding}
      bg={props.style}
      onClick={props.onClick}
    >
      {props.children}
    </Styled.Button>
  )
}
