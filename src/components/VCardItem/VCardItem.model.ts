import styled from 'styled-components'
import { theme } from '../../components/styles/Theme'

export const VCardItemDiv = styled.div`
  padding: 8px 11px;
  background: #f8f8f8;
  box-shadow: -2px 2px 12px -2px rgba(0, 0, 0, 0.1);

  .img_div {
    width: 100%;
    height: 115px;
    margin-top: 5px;
    display: flex;
    justify-content: center;

    ${theme.breakpoints.up('lg')} {
      height: 340px;
      width: 340px;
    }

    img {
      object-fit: cover;

      ${theme.breakpoints.up('lg')} {
        //width: 340px;

        //width: 100%;
        max-width: 340px;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .title_shop {
    display: flex;
    flex-direction: column;
    height: 100px;

    .title {
      font-size: 12px;
      margin: 5px 0 10px 0;

      ${theme.breakpoints.up('lg')} {
        font-size: 18px;
        font-weight: 400;
        line-height: 25px;
      }
    }

    .action_btn {
      display: flex;
      align-items: flex-end;
      gap: 10px;
      height: 100%;

      span {
        cursor: pointer;
        img {
          width: 15px;
        }
      }
    }
  }
`
