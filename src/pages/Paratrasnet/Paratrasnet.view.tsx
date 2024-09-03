import React, { PropsWithChildren } from 'react'
import { dataProductModel } from '../../models/dataProduct.model'
import * as Styled from './Paratrasnet.model'
import { VCardItem } from '../../components/VCardItem/VCardItem'
import filter from '../../icons/card_product_icon/filter.svg'
import { VFilter } from '../../components/VFilter/VFilter'
import { Container, Grid } from '@mui/material'
import { VLoaderView } from '../../components/VLoader/VLoader'

type Props = {
  data: dataProductModel[]
  isPending: boolean | null
  onClick: (item: dataProductModel) => void
  filterFn: () => void
  filterActiveState: boolean
  filterItemFn: (c: string) => void
  filterActive?: string[]
  dataFilter: dataProductModel[]
}

export const ParatrasnetView: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  return (
    <Container maxWidth="xl">
      {props.isPending ? (
        <VLoaderView />
      ) : (
        <Styled.ProductsDiv>
          <h1 className="title_page">PRODUSE SI ACCESORII</h1>

          <Styled.FilterDiv>
            <ul onClick={props.filterFn}>
              <li>
                <img src={filter} alt="filter" />
              </li>
              <li>Filter</li>
            </ul>

            {props.filterActiveState && (
              <div className="filter">
                <h2>Paratrasnet</h2>
                {props.data &&
                  props.filterActive?.map((item, index) => {
                    return (
                      <VFilter
                        display={
                          props.dataFilter[0] !== undefined &&
                          props.dataFilter[0].categoria === item
                            ? 'block'
                            : 'none'
                        }
                        //filterActive={props.filterActive}
                        item={item}
                        onClick={() => props.filterItemFn(item)}
                      ></VFilter>
                    )
                  })}
              </div>
            )}
          </Styled.FilterDiv>

          <Grid container spacing={2}>
            <Grid className="filter_item" item lg={3}>
              <Styled.FilterDesktop>
                <h2>Paratrasnet</h2>
                {props.data &&
                  props.filterActive?.map((item, index) => {
                    return (
                      <VFilter
                        display={
                          props.dataFilter[0] !== undefined &&
                          props.dataFilter[0].categoria === item
                            ? 'block'
                            : 'none'
                        }
                        //filterActive={props.filterActive}
                        item={item}
                        onClick={() => props.filterItemFn(item)}
                      ></VFilter>
                    )
                  })}
              </Styled.FilterDesktop>
            </Grid>

            {props.isPending ? (
              <p>Loading...</p>
            ) : props.dataFilter[0] === undefined ? (
              props.data.map((item, index: number) => {
                return (
                  <Grid xs={6} lg={3} item key={index}>
                    <VCardItem
                      localStorege="impamantare"
                      onClick={props.onClick}
                      data={item}
                    ></VCardItem>
                  </Grid>
                )
              })
            ) : (
              props.dataFilter.map((item, index: number) => {
                return (
                  <Grid lg={3} xs={6} item key={index}>
                    <VCardItem onClick={props.onClick} data={item}></VCardItem>
                  </Grid>
                )
              })
            )}
          </Grid>
        </Styled.ProductsDiv>
      )}
    </Container>
  )
}
