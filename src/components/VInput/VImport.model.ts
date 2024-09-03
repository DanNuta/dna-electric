import styled, { css } from 'styled-components'
import { theme } from '../../components/styles/Theme'

// global style
const inputBasicStyle = css`
  outline: none;
  padding: 10px;
`

// type
type Props = {
  height?: string
  fontSize?: string
  fontWeight?: string
  css?: string
}

//function CSS
const heightElement = (props: Props) => `
  height: ${props.height}
`

const fontStyle = (props: Props) => `
 font-size: ${props.fontSize};
 font-weight: ${props.fontWeight};
`

//---------------------------------------------------------

export const DivForm = styled.div`
  width: 100%;

  label {
    margin-bottom: 5px;
    ${fontStyle({ fontWeight: '600' })}
  }
`

export const InputTag = styled.input<Props>`
  width: 100%;
  margin-top: 0.5rem;
  background-color: rgba(39, 39, 39, 0.1);
  margin-bottom: 10px;
  ${inputBasicStyle};
  ${heightElement({ height: '2.5rem' })};
  ${fontStyle({ fontSize: '0.75rem', fontWeight: '400' })};
  border: 1px solid ${(props) => props.css};
`

export const TextareaTag = styled.textarea<Props>`
  background-color: rgba(39, 39, 39, 0.1);
  width: 100%;
  resize: none;
  margin-top: 5px;
  ${inputBasicStyle};
  ${heightElement({ height: '150px' })};
  margin-bottom: 1.5rem;
  border: 1px solid ${(props) => props.css};

  ${theme.breakpoints.up('lg')} {
    margin-top: 0.4rem;
    height: 248px;
  }
`
