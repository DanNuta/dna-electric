import React, {
  PropsWithChildren,
  useState,
  useEffect,
  useContext,
} from 'react'
import { ImpamantareView } from './Impamantare.view'
import { dataProductModel } from '../../models/dataProduct.model'
import { collection, FirestoreError, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { WishlistContext } from '../../context/Context.wishlist'
import { Wishlist } from '../../models/WislistContext.model'
import { ProduseContextModel } from '../../models/produseContext.model'
import { ProductsProvider } from '../../context/Context.products'

export const Impamantare: React.FC<PropsWithChildren> = (
  props: PropsWithChildren
) => {
  const { addWishList } = useContext(WishlistContext) as Wishlist
  const { impamantare } = useContext(ProductsProvider) as ProduseContextModel

  const [filterActiveState, setFilterActiveState] = useState<boolean>(false)
  const [dataFilterState, setDataFilter] = useState<dataProductModel[]>([])

  const filterFn = () => {
    setFilterActiveState((prev) => !prev)
  }

  const filterElementFn = (c: string) => {
    setFilterActiveState((prev) => !prev)

    setDataFilter((prev) => {
      const newArray = impamantare.data.filter((item) => item.categoria === c)

      return newArray
    })
  }

  let filter = impamantare.data.map((item) => item.categoria)
  let individualstring = [...new Set(filter)]

  return (
    <ImpamantareView
      filterActive={individualstring}
      filterItemFn={filterElementFn}
      filterActiveState={filterActiveState}
      filterFn={filterFn}
      onClick={addWishList}
      data={impamantare.data}
      isPending={impamantare.pending}
      dataFilter={dataFilterState}
    >
      {props.children}
    </ImpamantareView>
  )
}
