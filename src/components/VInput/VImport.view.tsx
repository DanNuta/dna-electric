import React, { PropsWithChildren } from 'react'
import * as Style from './VImport.model'
import { StateFormModel } from '../../models/stateForm.model'

type Props = {
  label: string
  type: string
  placeholder: string
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void
  onChangeArea?: (e: React.FormEvent<HTMLTextAreaElement>) => void
  nameState: StateFormModel
}

export const VImputView: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  return (
    <Style.DivForm>
      <label>{props.label}</label>
      <br />
      {props.type !== 'textarea' ? (
        <Style.InputTag
          name={props.type}
          css={props.nameState.css}
          value={props.nameState.value}
          type={props.type}
          placeholder={props.placeholder}
          onChange={props.onChange}
          id={props.label}
        />
      ) : (
        <Style.TextareaTag
          css={props.nameState.css}
          value={props.nameState.value}
          placeholder={props.placeholder}
          onChange={props.onChangeArea}
        ></Style.TextareaTag>
      )}
      <p>{props.nameState.msj}</p>
    </Style.DivForm>
  )
}
