import styled from 'styled-components'

export const WishlistItemDiv = styled.div`
  display: flex;
  background-color: white;
  height: 85px;
  gap: 20px;
  padding: 0 10px 0 0;
  position: relative;

  a {
    color: #272727;
    text-decoration: none;
  }

  .img_title {
    display: flex;
    height: 100%;
    gap: 10px;
    margin-right: 30px;

    .img_wl {
      height: 100%;
      width: 120px;
      display: flex;
      justify-content: center;

      img {
        height: 100%;
        object-fit: cover;
      }
    }

    .title {
      h4 {
        padding-top: 13px;
      }
    }
  }

  .cancel {
    cursor: pointer;
    top: 5px;
    position: absolute;
    right: 10px;
  }
`
