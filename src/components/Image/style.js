import styled from 'styled-components';

export const ImageWrapper = styled.div`
  img {
    max-width: 100%;
  }

  .create-img {
    background-color: whitesmoke;
    padding: 32px;
    display: inline-block;
    input {
      margin: 8px 0;
      padding: 8px;
      display: block;
    }
    button {
      padding: 8px;
      background: none;
      border-radius: 15px;
      &:hover {
        cursor: pointer;
      }
    }
  }
`