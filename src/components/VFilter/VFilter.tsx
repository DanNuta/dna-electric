import React, { PropsWithChildren } from 'react'
import { VFilterView } from './VFilter.view'
import { dataProductModel } from '../../models/dataProduct.model'

type Props = {
  onClick: () => void
  item: string
  //filterActive?: string[] | undefined;
  display?: string
}

export const VFilter: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  return (
    <VFilterView
      display={props.display}
      item={props.item}
      onClick={props.onClick}
    >
      {props.children}
    </VFilterView>
  )
}
