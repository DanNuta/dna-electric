import { FirebaseError } from 'firebase/app'
import React, { PropsWithChildren } from 'react'
import { CeOferimModel } from '../../../models/ceOferim.model'
import * as Style from './CeOferim.module'
import { CeOferim } from '../../../components/VCardCeOferim/VCeOferim'

type Props = {
  data?: CeOferimModel[]
  error: FirebaseError | null
  isPending: boolean
}

export const CeOferimView: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  return (
    <Style.DivCeOferimElement>
      <h1 className="title">Ce oferim</h1>
      <Style.CeOferimDiv>
        {props.data &&
          props.data.map((item, index) => {
            return <CeOferim key={index} item={item}></CeOferim>
          })}
      </Style.CeOferimDiv>
    </Style.DivCeOferimElement>
  )
}
