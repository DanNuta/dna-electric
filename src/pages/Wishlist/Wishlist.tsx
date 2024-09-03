import React, { PropsWithChildren, useContext } from 'react'
import { WishlistView } from './Wishlist.view'
import { dataProductModel } from '../../models/dataProduct.model'
import { WishlistContext } from '../../context/Context.wishlist'
import { Wishlist } from '../../models/WislistContext.model'

type Props = {
  onClick: () => void
  wishListToggle: boolean
}

export const WishlistEl: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  const { deleteAll } = useContext(WishlistContext) as Wishlist

  return (
    <WishlistView
      wishListToggle={props.wishListToggle}
      wishlist={props.onClick}
      onClick={deleteAll}
    >
      {props.children}
    </WishlistView>
  )
}
