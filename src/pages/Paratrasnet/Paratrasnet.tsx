import React, {
  PropsWithChildren,
  useState,
  useEffect,
  useContext,
} from 'react'
import { ParatrasnetView } from './Paratrasnet.view'
import { dataProductModel } from '../../models/dataProduct.model'
import { collection, FirestoreError, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { WishlistContext } from '../../context/Context.wishlist'
import { Wishlist } from '../../models/WislistContext.model'
import { ProduseContextModel } from '../../models/produseContext.model'
import { ProductsProvider } from '../../context/Context.products'
import { useProductsModel } from '../../models/products.model'

type Props = {
  products: useProductsModel
}

export const Paratrasnet: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  const { addWishList } = useContext(WishlistContext) as Wishlist

  const [filterActiveState, setFilterActiveState] = useState<boolean>(false)
  const [dataFilterState, setDataFilter] = useState<dataProductModel[]>([])

  const filterFn = () => {
    setFilterActiveState((prev) => !prev)
  }

  const filterElementFn = (c: string) => {
    setFilterActiveState((prev) => !prev)

    setDataFilter((prev) => {
      const newArray = props.products.data.filter(
        (item) => item.categoria === c
      )

      return newArray
    })
  }

  let filter = props.products.data.map((item) => item.categoria)
  let individualstring = [...new Set(filter)]

  return (
    <ParatrasnetView
      filterActive={individualstring}
      filterItemFn={filterElementFn}
      filterActiveState={filterActiveState}
      filterFn={filterFn}
      onClick={addWishList}
      data={props.products.data}
      isPending={props.products.pending}
      dataFilter={dataFilterState}
    >
      {props.children}
    </ParatrasnetView>
  )
}
