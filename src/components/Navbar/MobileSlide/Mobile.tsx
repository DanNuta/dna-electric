import { MobileResponsiveView } from './Mobile.view'
import React, { PropsWithChildren } from 'react'
import { NavbarType } from '../../../models/navbar.model'

type Props = {
  toggle: () => void
  stateCkeck: boolean
}

export const MobileResponsive: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  return (
    <MobileResponsiveView
      state={props.stateCkeck}
      toggle={props.toggle}
    ></MobileResponsiveView>
  )
}
