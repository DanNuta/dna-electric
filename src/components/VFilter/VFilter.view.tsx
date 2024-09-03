import React, { PropsWithChildren } from 'react'
import * as Style from './VFilter.model'
import { dataProductModel } from '../../models/dataProduct.model'

type Props = {
  onClick: () => void
  item: string
  display?: string
}

export const VFilterView: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  return (
    <Style.FilterElement display={props.display} onClick={props.onClick}>
      <Style.BoxCheckDiv>
        <div className="active" />
      </Style.BoxCheckDiv>

      <p>{props.item}</p>
    </Style.FilterElement>
  )
}
