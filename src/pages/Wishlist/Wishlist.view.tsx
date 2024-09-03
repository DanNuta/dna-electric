import React, { PropsWithChildren, useContext } from 'react'
import * as Style from './Wishlist.model'
import { WishlistContext } from '../../context/Context.wishlist'
import { dataProductModel } from '../../models/dataProduct.model'
import { VButton } from '../../components/VButton/VButton'
import { VWishListItem } from '../../components/VWishlistItem/VWishListItem'
import { Wishlist } from '../../models/WislistContext.model'

type Props = {
  onClick: () => void
  wishlist: () => void
  wishListToggle: boolean
}

export const WishlistView: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  const { wishlistState } = useContext(WishlistContext) as Wishlist

  return (
    <Style.WishListDiv active={props.wishListToggle}>
      <div className="btn_delete_wishlist">
        <h2>Preferinte</h2>
        <VButton onClick={props.onClick} color="white" bg="#272727">
          Sterge
        </VButton>
      </div>

      <div className="item_wishlist">
        {wishlistState.map((item: dataProductModel, index: number) => {
          return (
            <VWishListItem onClick={props.wishlist} data={item}></VWishListItem>
          )
        })}
      </div>
    </Style.WishListDiv>
  )
}
