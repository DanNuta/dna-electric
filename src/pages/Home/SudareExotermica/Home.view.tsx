import React, { PropsWithChildren, useContext } from 'react'
import * as Style from './Home.model'
import { HomeProps } from '../../../models/home.model'
import { FirebaseError } from 'firebase/app'
import { VButton } from '../../../components/VButton/VButton'
import { NavbarContext } from '../../../context/Context.navbar'
import { LinkCOmponent } from '../../../components/VLink/VLink'
import { VLoaderView } from '../../../components/VLoader/VLoader'
import { VCardSudare } from '../../../components/VCardSudare/VCardSudare'
import { NavbarType } from '../../../models/navbar.model'
import { Grid } from '@mui/material'
import { ProductsProvider } from '../../../context/Context.products'
import { NavbarContextModel } from '../../../models/NavbarContext.model'

type Props = {
  data: HomeProps
  error: FirebaseError | null
  isPending: boolean
}

export const HomeView: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  const { data } = useContext(NavbarContext) as NavbarContextModel
  const impamantare = useContext(ProductsProvider)

  return (
    <>
      {props.isPending ? (
        <VLoaderView />
      ) : (
        <Style.SudareExotermica>
          <Style.HeadersDivText>
            <h1>{props.data.title}</h1>
            <p>{props.data.description}</p>

            <LinkCOmponent
              bg="#FFD600"
              color="#272727"
              link={`${data.contacte}`}
              width="300px"
            >
              Contacteaza-ne
            </LinkCOmponent>
          </Style.HeadersDivText>

          <Style.HeaderDivImg>
            <img src={props.data.image} alt="" />
            <LinkCOmponent
              bg="#FFD600"
              color="#272727"
              link={`${data.contacte}`}
            >
              Contacteaza-ne
            </LinkCOmponent>
          </Style.HeaderDivImg>

          <Style.VCardItemSudare>
            <VCardSudare link={`${data.impamantare}`} />
          </Style.VCardItemSudare>
        </Style.SudareExotermica>
      )}
    </>
  )
}
