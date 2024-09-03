import React, { useState } from 'react'
import { VButtonView } from './VButton.view'

type Props = {
  bg?: string
  padding?: string
  color?: string
  onClick?: (e: any) => void
}

export const VButton: React.FC<React.PropsWithChildren<Props>> = (
  props: React.PropsWithChildren<Props>
) => {
  return (
    <VButtonView
      color={props.color}
      padding={props.padding}
      style={props.bg}
      onClick={props.onClick}
    >
      {props.children}
    </VButtonView>
  )
}
