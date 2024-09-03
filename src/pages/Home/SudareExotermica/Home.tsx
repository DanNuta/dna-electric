import { HomeView } from './Home.view'
import React, { PropsWithChildren, useEffect, useState } from 'react'

import { collection, FirestoreError, onSnapshot } from 'firebase/firestore'
import { db } from '../../../firebase/config'
import { HomeProps } from '../../../models/home.model'

type Props = {
  data: HomeProps
}

export const Home: React.FC<PropsWithChildren> = (props: PropsWithChildren) => {
  const [dataState, setDataState] = useState<HomeProps>({
    title: '',
    description: '',
    image: '',
  })

  const [isPendingState, setIsPendingState] = useState<boolean>(false)
  const [errorState, setErrorState] = useState<FirestoreError | null>(null)

  useEffect(() => {
    setIsPendingState(true)
    const ref = collection(db, 'Home')

    const onSubscribe = onSnapshot(ref, (snapshopt) => {
      //let navbar: NavbarType = ;

      snapshopt.docs.forEach(
        (item) => {
          setDataState({
            title: item.data().title,
            description: item.data().description,
            image: item.data().image,
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
    <HomeView error={errorState} isPending={isPendingState} data={dataState}>
      {props.children}
    </HomeView>
  )
}
