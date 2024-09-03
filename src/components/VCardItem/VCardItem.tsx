import React, { PropsWithChildren, useContext } from 'react'
import { VCardItemView } from './VCardItem.view'
import { dataProductModel } from '../../models/dataProduct.model'

type Props = {
  data: dataProductModel
  onClick: (item: dataProductModel) => void
  localStorege?: string
}

export const VCardItem: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  return (
    <VCardItemView
      localStorege={props.localStorege}
      data={props.data}
      onClick={props.onClick}
    >
      {props.children}
    </VCardItemView>
  )
}
