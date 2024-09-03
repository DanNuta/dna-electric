import styled from 'styled-components'
import { theme } from '../../components/styles/Theme'

type Props = {
  active?: boolean
}

export const WishListDiv = styled.div<Props>`
  background-color: rgba(39, 39, 39, 0.85);
  color: white;
  padding: 22px 30px;
  position: absolute;
  width: 100%;
  z-index: 3;

  transform: ${(props) =>
    props.active ? 'translateY(0%)' : 'translateY(-200%)'};
  transition: 0.3s ease;

  ${theme.breakpoints.up('lg')} {
    width: 30%;
    right: 0;
    z-index: 1;
  }

  .item_wishlist {
    display: flex;
    flex-direction: column;
    gap: 30px 0;
    margin-top: 30px;
  }

  .btn_delete_wishlist {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
