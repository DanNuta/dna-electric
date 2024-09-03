import React, { PropsWithChildren, useContext } from 'react'
import * as Style from './Personal.module'
import { PersonalModel } from '../../../models/personal.model'
import { VPersonal } from '../../../components/VPersonal/VPersonal'
import { VButton } from '../../../components/VButton/VButton'
import star from '../../../icons/personal/star.svg'
import people from '../../../icons/personal/personal.svg'
import dolar from '../../../icons/personal/dolar.svg'
import { NavbarContext } from '../../../context/Context.navbar'
import { LinkCOmponent } from '../../../components/VLink/VLink'

type Props = {
  data: PersonalModel[]
  contact: {
    img?: string
    contact?: string
  }
}

export const PersonalView: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  const contextNavbar = useContext(NavbarContext)

  return (
    <Style.ElementPersonal>
      <div className="img_element">
        <img src={props.contact.img} alt="" />
      </div>

      <Style.PersonalDiv>
        {props.data &&
          props.data.map((item, i) => {
            return <VPersonal key={i} data={item} />
          })}

        <LinkCOmponent
          color="white"
          bg="#272727"
          link={`${contextNavbar?.data.contacte}`}
        >
          Contacteaza-ne
        </LinkCOmponent>
      </Style.PersonalDiv>
    </Style.ElementPersonal>
  )
}
