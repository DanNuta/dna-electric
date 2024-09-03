import React, { PropsWithChildren, useContext } from 'react'
import * as Style from './Products.model'
import { VButton } from '../../components/VButton/VButton'
import wishlist from '../../icons/hover_icon/wish_list.svg'
import wishlistHover from '../../icons/card_product_icon/wishlistHover.svg'
import { WishlistContext } from '../../context/Context.wishlist'
import { dataProductModel } from '../../models/dataProduct.model'
import shop from '../../icons/card_product_icon/shop.svg'
import { Container, Grid } from '@mui/material'
import { VCardItem } from '../../components/VCardItem/VCardItem'
import like from '../../icons/calitate/like.svg'
import calitate from '../../icons/calitate/calitate.svg'
import garantie from '../../icons/calitate/garantie.svg'
import { Wishlist } from '../../models/WislistContext.model'
import { NavbarContext } from '../../context/Context.navbar'
import { NavbarType } from '../../models/navbar.model'
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom'
import { ProduseSimilare } from '../Products/produseSimilare/ProduseSimilare.view'
import { LinkCOmponent } from '../../components/VLink/VLink'
import { VLoaderView } from '../../components/VLoader/VLoader'

type Props = {
  data: dataProductModel
  isPending: boolean | null
  next: () => void
  prev: () => void
  contor: number
  wishlist: (e: dataProductModel) => void
  products?: dataProductModel[]
  link?: string
}

export const ProductsView: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  const { wishlistState } = useContext(WishlistContext) as Wishlist
  const contextNavbar = useContext(NavbarContext)

  const navigate = useNavigate()
  const params = useParams()
  const location = useLocation()

  const path = (location.pathname = '')

  const checkItExist = wishlistState.some(
    (item: dataProductModel) => item.id === props.data?.id
  )

  return (
    <Container maxWidth="xl">
      {props.isPending ? (
        <VLoaderView />
      ) : (
        <Style.ItemProductsDiv>
          <h1 className="title">{props.data?.title}</h1>

          <Style.ImgSlider>
            <img src={props?.data?.img?.[props.contor]} />

            <div className="btn">
              <Style.Button
                display={props.data?.img?.[1] ? 'block' : 'none'}
                onClick={props.prev}
                className="prev"
              >
                prev
              </Style.Button>
              <Style.Button
                display={props.data?.img?.[1] ? 'block' : 'none'}
                onClick={props.next}
                className="next"
              >
                next
              </Style.Button>
            </div>
          </Style.ImgSlider>

          <Style.InfoDiv>
            <Style.DescriereDiv>
              <h1 className="title">{props.data?.title}</h1>
              <hr className="hr_element" />
              <h2>Descriere</h2>
              <p>{props.data?.description?.[0]}</p>
              <hr className="hr_element" />
            </Style.DescriereDiv>

            <Style.ContactShoWishlistDiv>
              <LinkCOmponent
                link={`${path}/${contextNavbar?.data.contacte}`}
                color="rgba(39, 39, 39, 1)"
                bg="rgba(255, 214, 0, 1)"
              >
                Contacteaza-ne
              </LinkCOmponent>

              <ul>
                <li>
                  <a
                    className="shop_class"
                    href="https://www.paratrasnet.shop"
                    target="_blank"
                  >
                    <img src={shop} alt="shop" />
                    Adauga in cos
                  </a>
                </li>
                {/* <li><img src={shop} alt="shop"/>Adauga in cos</li> */}
                <li onClick={() => props.wishlist(props.data)}>
                  <img
                    src={checkItExist ? wishlist : wishlistHover}
                    alt="wishlist"
                  />
                  Adauga in la favorite
                </li>
              </ul>
            </Style.ContactShoWishlistDiv>
          </Style.InfoDiv>
        </Style.ItemProductsDiv>
      )}

      <Style.ProduseSimilareDiv>
        <h1 className="title">PRODUSE SIMILARE</h1>

        <Grid container spacing={2}>
          <ProduseSimilare link={props.link} data={props.products} />
        </Grid>
      </Style.ProduseSimilareDiv>

      <Grid container spacing={3}>
        <Grid md={4} xs={12} item>
          <Style.CalitateDiv>
            <img src={calitate} alt="calitate" />
            <h5>Calitate inalta</h5>
            <p>Paratrasnetul nostru protejeaza de la cele mai mari tensiuni</p>
          </Style.CalitateDiv>
        </Grid>

        <Grid md={4} xs={12} item>
          <Style.CalitateDiv>
            <img src={like} alt="calitate" />
            <h5>Protectie exceptionala</h5>
            <p>Paratrasnetul nostru protejeaza de la cele mai mari tensiuni</p>
          </Style.CalitateDiv>
        </Grid>

        <Grid md={4} xs={12} item>
          <Style.CalitateDiv>
            <img src={garantie} alt="calitate" />
            <h5>Garantie de lunga durata</h5>
            <p>Paratrasnetul nostru protejeaza de la cele mai mari tensiuni</p>
          </Style.CalitateDiv>
        </Grid>
      </Grid>
    </Container>
  )
}
