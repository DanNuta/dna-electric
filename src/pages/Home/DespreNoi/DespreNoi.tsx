import React, { PropsWithChildren, useEffect, useState } from 'react'
import { collection, FirestoreError, onSnapshot } from 'firebase/firestore'
import { db } from '../../../firebase/config'
import { DespreNoiView } from './DespreNoi.view'

import { DespreNoiModel } from '../../../models/despreeNoi.model'

export const DespreNoi: React.FC<PropsWithChildren> = (
  props: PropsWithChildren
) => {
  const [dataState, setDataState] = useState<DespreNoiModel>({
    number_project: 0,
    img: '',
    img_description: '',
    title: '',
    descrition_project: '',
  })

  const [isPendingState, setIsPendingState] = useState<boolean>(false)
  const [errorState, setErrorState] = useState<FirestoreError | null>(null)

  useEffect(() => {
    setIsPendingState(true)
    const ref = collection(db, 'Despre_noi')

    const onSubscribe = onSnapshot(ref, (snapshopt) => {
      snapshopt.docs.forEach(
        (item) => {
          setDataState({
            title: item.data().title,
            img_description: item.data().img_description,
            img: item.data().img,
            number_project: item.data().number_project,
            descrition_project: item.data().descrition_project,
          })

          setIsPendingState(false)
        },
        (error: FirestoreError) => {
          setErrorState(error)
          setIsPendingState(false)
        }
      )
    })

    return () => {
      onSubscribe()
    }
  }, [])

  return (
    <DespreNoiView
      data={dataState}
      isPending={isPendingState}
      error={errorState}
    >
      {props.children}
    </DespreNoiView>
  )
}
