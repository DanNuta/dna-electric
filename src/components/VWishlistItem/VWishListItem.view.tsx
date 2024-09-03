import React, { PropsWithChildren } from 'react'
import { dataProductModel } from '../../models/dataProduct.model'
import * as Style from './VWishListItem.model'
import cancel from '../../icons/card_product_icon/cancel.svg'
import { Link } from 'react-router-dom'

type Props = {
  data: dataProductModel
  delete: (id: string) => void
  onClick: () => void
}

export const VWishListItemView: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  return (
    <Style.WishlistItemDiv>
      <Link to={`${props.data.id}`}>
        <div onClick={props.onClick} className="img_title">
          <div className="img_wl">
            <img src={props.data.img[0]} alt="" />
          </div>

          <div className="title">
            <h4>{props.data.title}</h4>
          </div>
        </div>
      </Link>

      <div onClick={() => props.delete(props.data.id)} className="cancel">
        <img src={cancel} alt="cancel" />
      </div>
    </Style.WishlistItemDiv>
  )
}
