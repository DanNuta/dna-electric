import React, {
  PropsWithChildren,
  useState,
  useEffect,
  useContext,
} from 'react'
import { ProductsView } from './Products.view'
import { useParams } from 'react-router-dom'
import {
  collection,
  FirestoreError,
  onSnapshot,
  getDoc,
  doc,
} from 'firebase/firestore'
import { db } from '../../firebase/config'
import { WishlistContext } from '../../context/Context.wishlist'
import { dataProductModel } from '../../models/dataProduct.model'
import { Wishlist } from '../../models/WislistContext.model'

type Props = {
  collection?: string
  localStorege?: string
  products?: dataProductModel[]
  link?: string
}

export const Products: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  const { id } = useParams()

  const { addWishList } = useContext(WishlistContext) as Wishlist

  const [dateState, setDataState] = useState<dataProductModel>({
    categoria: '',
    description: [],
    id: '',
    img: [],
    title: '',
  })

  const [isPendingState, setIsPendingState] = useState<boolean | null>(null)
  const [contorState, setContorState] = useState(0)

  useEffect(() => {
    setIsPendingState(true)

    const ref = doc(db, `${props.collection}`, `${id}`)

    getDoc(ref).then((document) => {
      setDataState({
        categoria: document.data()?.categoria,
        description: document.data()?.description,
        id: document.id,
        img: document.data()?.img,
        title: document.data()?.title,
      })
      setIsPendingState(false)
    })
  }, [`${id}`])

  const nextImg = () => {
    const lengthImg = dateState?.img?.length

    if (lengthImg) {
      console.log(lengthImg - 1)
      if (contorState == lengthImg - 1) {
        setContorState((prev) => {
          return (prev = 0)
        })
      } else {
        setContorState((prev) => {
          return prev + 1
        })
      }
    }
  }

  const prevImg = () => {
    const lengthImg = dateState?.img?.length

    if (lengthImg) {
      console.log(lengthImg - 1)

      if (contorState == 0) {
        setContorState((prev) => {
          return (prev = lengthImg - 1)
        })
      } else {
        setContorState((prev) => {
          return prev - 1
        })
      }
    }
  }

  return (
    <ProductsView
      wishlist={addWishList}
      prev={prevImg}
      contor={contorState}
      next={nextImg}
      data={dateState}
      isPending={isPendingState}
      products={props.products}
      link={props.link}
    >
      {props.children}
    </ProductsView>
  )
}
