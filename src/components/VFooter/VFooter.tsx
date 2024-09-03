import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react'
import { collection, FirestoreError, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { VFooterView } from './VFooter.view'
import { NavbarType } from '../../models/navbar.model'
import { NavbarContext } from '../../context/Context.navbar'
import { NavbarContextModel } from '../../models/NavbarContext.model'

export const VFooter: React.FC<PropsWithChildren> = (
  props: PropsWithChildren
) => {
  const { data } = useContext(NavbarContext) as NavbarContextModel

  return <VFooterView data={data}>{props.children}</VFooterView>
}
