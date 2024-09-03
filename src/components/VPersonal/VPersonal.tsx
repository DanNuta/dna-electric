import React, { PropsWithChildren } from 'react'
import { VPersonalView } from './VPersonal.view'
import { PersonalModel } from '../../models/personal.model'

type Props = {
  data: PersonalModel
}

export const VPersonal: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  return <VPersonalView data={props.data}></VPersonalView>
}
