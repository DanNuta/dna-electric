import React, {
  FormEvent,
  FormEventHandler,
  PropsWithChildren,
  useContext,
  useRef,
  useState,
} from 'react'
import * as Style from './Contact.model'
import { VImput } from '../../components/VInput/VInput'
import { VButton } from '../../components/VButton/VButton'
import location from '../../icons/contact_icon/location.svg'
import mail from '../../icons/contact_icon/email.svg'
import phone from '../../icons/contact_icon/phone.svg'
import { NavbarContext } from '../../context/Context.navbar'
import { StateFormModel } from '../../models/stateForm.model'
import { NavbarContextModel } from '../../models/NavbarContext.model'
import { useLocation } from 'react-router-dom'

type Props = {
  onChangeName: (e: React.FormEvent<HTMLInputElement>) => void
  onChangeEmail: (e: React.FormEvent<HTMLInputElement>) => void
  onChangeTel: (e: React.FormEvent<HTMLInputElement>) => void
  onChangeMsj: (e: React.FormEvent<HTMLTextAreaElement>) => void
  nameState: StateFormModel
  emailState: StateFormModel
  telState: StateFormModel
  msjState: StateFormModel
  contact: (e: any, form: any) => void
  isPendingState: boolean | null
}

export const ContactViwe: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  const form = useRef<HTMLFormElement | null>(null)

  const { data } = useContext(NavbarContext) as NavbarContextModel

  return (
    <Style.ContactDiv>
      {/* (e: React.FormEvent, form: HTMLFormElement) => props.contact(e, form) */}

      <h1>Contact</h1>
      <p>
        Simțiți-vă liber să ne contactați oricând. Vom reveni cu un mesaj cât
        mai curând posibil!
      </p>

      <Style.FormElement ref={form} onSubmit={(e) => props.contact(e, form)}>
        <h1 className="title">Trimite-ne un mesaj</h1>

        <Style.ElementInput>
          <h1 className="title_mobile">Trimite-ne un mesaj</h1>

          <VImput
            nameState={props.nameState}
            type="text"
            label="Nume"
            placeholder="Ignatiuc Anastasia"
            onChange={props.onChangeName}
          />
          <VImput
            nameState={props.emailState}
            type="email"
            label="Email"
            placeholder="ignatiucanastasia@gmail.com"
            onChange={props.onChangeEmail}
          />
          <VImput
            nameState={props.telState}
            type="tel"
            label="Telefon"
            placeholder="+37369744487"
            onChange={props.onChangeTel}
          />
        </Style.ElementInput>

        <Style.ElementInput center="center">
          <VImput
            nameState={props.msjState}
            type="textarea"
            label="Mesaj"
            placeholder="Scrie un mesaj"
            onChangeArea={props.onChangeMsj}
          />
          <VButton bg="rgba(255, 214, 0, 1)">
            {props.isPendingState ? 'Sending...' : 'Contacteaza-ne'}
          </VButton>
        </Style.ElementInput>

        <Style.AboutUsElement>
          <div className="about_us">
            <h1>Despre noi</h1>

            <ul className="ul_element">
              <li>
                <img src={phone} alt="telefon" />
                <a href={`tel: ${data.Nr_telefon}`}>{data.Nr_telefon}</a>
              </li>
              <li>
                <img src={location} alt="telefon" />
                {data.adresa}
              </li>
              <li>
                <img src={mail} alt="telefon" />
                {data.email}
              </li>
            </ul>
          </div>

          <div className="bg_template" />
        </Style.AboutUsElement>
      </Style.FormElement>

      <VButton
        onClick={(e) => props.contact(e, form)}
        bg="rgba(255, 214, 0, 1)"
      >
        {props.isPendingState ? 'Sending...' : 'Contacteaza-ne'}
      </VButton>

      <Style.MapDiv>
        <iframe src={data.map} />
      </Style.MapDiv>
    </Style.ContactDiv>
  )
}
