import React, { PropsWithChildren, useState } from 'react'
import { VCeOferimView } from './VCeoferim.view'
import { CeOferimModel } from '../../models/ceOferim.model'

type Props = {
  item: CeOferimModel
}
export const CeOferim: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  const [activateCeOferimState, setActivateCeOferimState] =
    useState<boolean>(false)

  const changeState = () => {
    setActivateCeOferimState((prev) => !prev)

    console.log('salut')
  }

  return (
    <VCeOferimView
      state={activateCeOferimState}
      onClick={changeState}
      item={props.item}
    >
      {props.children}
    </VCeOferimView>
  )
}
