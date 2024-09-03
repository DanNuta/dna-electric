import React, { PropsWithChildren, useEffect, useState } from 'react'
import { collection, FirestoreError, onSnapshot } from 'firebase/firestore'
import { db } from '../../../firebase/config'
import { fiiInSiguranta } from '../../../models/fiiInSiguranta.model'
import { FiiInSigurantaView } from './FiiInSiguranta.view'

export const FiiInSiguranta: React.FC<PropsWithChildren> = (
  props: PropsWithChildren
) => {
  const [dataState, setDataState] = useState<fiiInSiguranta>({
    title: '',
    box_yellow: '',
    description_bottom_img: '',
    description_bottom_title: '',
    img_dreapta: '',
    img_stanga: '',
  })

  const [isPendingState, setIsPendingState] = useState<boolean>(false)
  const [errorState, setErrorState] = useState<FirestoreError | null>(null)

  useEffect(() => {
    setIsPendingState(true)
    const ref = collection(db, 'FiiInSiguranta')

    const onSubscribe = onSnapshot(ref, (snapshopt) => {
      snapshopt.docs.forEach(
        (item) => {
          setDataState({
            title: item.data().title,
            box_yellow: item.data().box_yellow,
            description_bottom_img: item.data().description_bottom_img,
            description_bottom_title: item.data().description_bottom_title,
            img_dreapta: item.data().img_dreapta,
            img_stanga: item.data().img_stanga,
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
    <FiiInSigurantaView
      data={dataState}
      isPending={isPendingState}
      error={errorState}
    >
      {props.children}
    </FiiInSigurantaView>
  )
}
