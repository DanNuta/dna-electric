import React, { PropsWithChildren, useContext } from 'react'
import { dataProductModel } from '../../models/dataProduct.model'
import * as Style from './VCardSudare.model'
import { Grid } from '@mui/material'
import wishlist from '../../icons/hover_icon/wish_list.svg'
import search from '../../icons/hover_icon/search.svg'
import { Link } from 'react-router-dom'
import { WishlistContext } from '../../context/Context.wishlist'
import { Wishlist } from '../../models/WislistContext.model'
import hoverWishlist from '../../icons/hover_icon/wishlist-hover.svg'

type Props = {
  data: dataProductModel[]
  link?: string
}

export const VCardSudareView: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  const { addWishList, wishlistState } = useContext(WishlistContext) as Wishlist

  return (
    <>
      {props.data &&
        props.data.slice(0.4).map((item) => {
          const check = wishlistState.some((el) => {
            el.id === item.id
          })

          return (
            <Style.BoxSudare>
              <img src={item.img[0]} />

              <div className="hover_Element">
                {/* <img src={item.img[0]}></img> */}

                <Style.IconElement>
                  <Link to={`${props.link}/${item.id}`}>
                    <Style.Icon>
                      <img src={search} alt="" />
                    </Style.Icon>
                  </Link>

                  <Style.Icon onClick={() => addWishList(item)}>
                    <img
                      src={
                        wishlistState.includes(item) ? hoverWishlist : wishlist
                      }
                      alt="wishlist"
                    />
                  </Style.Icon>
                </Style.IconElement>
              </div>
            </Style.BoxSudare>
          )
        })}
    </>
  )
}
