import React, {
  ChangeEvent,
  FormEventHandler,
  PropsWithChildren,
  useState,
} from 'react'
import { ContactViwe } from './Contact.view'
import { StateFormModel } from '../../models/stateForm.model'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'

type State = {
  msj: string
  value: string
  css: string
}

export const Contact: React.FC<PropsWithChildren> = (
  props: PropsWithChildren
) => {
  const navigate = useNavigate()

  const [inputNumeState, setInputNumeState] = useState<State>({
    msj: '',
    value: '',
    css: 'transparent',
  })
  const [inputEmailState, setInputEmailState] = useState<State>({
    msj: '',
    value: '',
    css: 'transparent',
  })
  const [inputTelState, setInputTelState] = useState<State>({
    msj: '',
    value: '',
    css: 'transparent',
  })
  const [inputMsjState, setInputMsjState] = useState<State>({
    msj: '',
    value: '',
    css: 'transparent',
  })

  const [isPendingState, setIsPendigState] = useState<boolean | null>(null)
  const [errorState, setErrorState] = useState<string | null>(null)

  const patterm = {
    nume: /^[a-zA-Z]{3,10}$/,
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    tel: /^[0-9]{10}$/,
    msj: /^\w+$/,
  }

  const inputNameHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value

    setInputNumeState((prev) => {
      const obj = {
        msj: patterm['nume'].test(newValue)
          ? ''
          : 'Numele de utilizator trebuie sa fie intre 3-10 caractere',
        value: (prev.value = newValue),
        css: (prev.css = patterm['nume'].test(newValue) ? 'green' : 'red'),
      }
      return obj
    })
  }

  const inputEmailHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value

    setInputEmailState((prev) => {
      const obj = {
        msj: patterm['email'].test(newValue)
          ? ''
          : 'Trebuie sa introduci o adresa de email valida',
        value: (prev.value = newValue),
        css: (prev.css = patterm['email'].test(newValue) ? 'green' : 'red'),
      }
      return obj
    })
  }

  const inputTelHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value

    setInputTelState((prev) => {
      const obj = {
        msj: patterm['tel'].test(newValue)
          ? ''
          : 'Trebuie sa introduci un nr. de telefon format din 10 cifre',
        value: (prev.value = newValue),
        css: (prev.css = patterm['tel'].test(newValue) ? 'green' : 'red'),
      }
      return obj
    })
  }

  const inputMsjHandler = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const newValue = e.currentTarget.value

    setInputMsjState((prev) => {
      const obj = {
        msj: patterm['msj'].test(newValue)
          ? ''
          : 'Trebuie sa indroduci un mesaj',
        value: (prev.value = newValue),
        css: (prev.css = patterm['msj'].test(newValue) ? 'green' : 'red'),
      }

      return obj
    })
  }

  const contact = async (e: any, form: any) => {
    e.preventDefault()

    console.log('salur')

    if (inputNumeState.value === '') {
      setInputNumeState((prev) => {
        const obj = {
          msj: prev.msj,
          value: prev.value,
          css: 'red',
        }

        return obj
      })
    }
    if (inputEmailState.value === '') {
      setInputEmailState((prev) => {
        const obj = {
          msj: prev.msj,
          value: prev.value,
          css: 'red',
        }

        return obj
      })
    }
    if (inputTelState.value == '') {
      setInputTelState((prev) => {
        const obj = {
          msj: prev.msj,
          value: prev.value,
          css: 'red',
        }

        return obj
      })
    }
    if (inputMsjState.value === '') {
      setInputMsjState((prev) => {
        const obj = {
          msj: prev.msj,
          value: prev.value,
          css: 'red',
        }

        return obj
      })

      return
    }

    setInputNumeState((prev) => {
      const obj = {
        msj: prev.msj,
        value: (prev.value = ''),
        css: (prev.css = 'transparent'),
      }

      return obj
    })

    setInputEmailState((prev) => {
      const obj = {
        msj: prev.msj,
        value: (prev.value = ''),
        css: (prev.css = 'transparent'),
      }

      return obj
    })

    setInputTelState((prev) => {
      const obj = {
        msj: prev.msj,
        value: (prev.value = ''),
        css: (prev.css = 'transparent'),
      }

      return obj
    })
    setInputMsjState((prev) => {
      const obj = {
        msj: prev.msj,
        value: (prev.value = ''),
        css: (prev.css = 'transparent'),
      }
      return obj
    })

    try {
      setIsPendigState(true)
      const data = await emailjs.sendForm(
        'service_slnsoi6',
        'template_m0n6104',
        form.current,
        'user_HhwPsdYuSdseFT3DDVWkC'
      )
      console.log(data)
      setIsPendigState(false)
    } catch (error: any) {
      setErrorState(error)
    }
    navigate('/')
  }

  return (
    <ContactViwe
      isPendingState={isPendingState}
      contact={contact}
      msjState={inputMsjState}
      telState={inputTelState}
      emailState={inputEmailState}
      nameState={inputNumeState}
      onChangeName={inputNameHandler}
      onChangeEmail={inputEmailHandler}
      onChangeTel={inputTelHandler}
      onChangeMsj={inputMsjHandler}
    >
      {props.children}
    </ContactViwe>
  )
}
