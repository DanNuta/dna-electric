import React, { PropsWithChildren, useContext } from 'react'
import { dataProductModel } from '../../models/dataProduct.model'
import * as Style from './VCardItem.model'
import wishlist from '../../icons/hover_icon/wish_list.svg'
import { Link, useLocation } from 'react-router-dom'
import wishlistHover from '../../icons/card_product_icon/wishlistHover.svg'
import { WishlistContext } from '../../context/Context.wishlist'
import shop from '../../icons/card_product_icon/shop.svg'
import { Wishlist } from '../../models/WislistContext.model'

type Props = {
  data: dataProductModel
  onClick?: (item: dataProductModel) => void
  localStorege?: string
}

export const VCardItemView: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  const { wishlistState } = useContext(WishlistContext) as Wishlist
  const checkItExist = wishlistState.some(
    (item: dataProductModel) => item.id === props.data.id
  )

  return (
    <Style.VCardItemDiv>
      <Link to={`${props.data.id}`}>
        <div className="img_div">
          <img src={props.data.img[0]} alt="" />
        </div>
      </Link>

      <div className="title_shop">
        <h1 className="title">{props.data.title.substring(0, 55)}</h1>

        <div className="action_btn">
          {/* <li><a href="https://www.paratrasnet.shop" target="_blank"><img src={shop} alt="shop" />Adauga in cos</a></li> */}
          {/* <img src={shop} alt="shop" /> */}
          <span>
            <a href="https://www.paratrasnet.shop" target="_blank">
              <img src={shop} alt="shop" />
            </a>
          </span>
          <span onClick={() => props.onClick?.(props.data)}>
            <img src={checkItExist ? wishlist : wishlistHover} alt="wishlist" />
          </span>
        </div>
      </div>
    </Style.VCardItemDiv>
  )
}
