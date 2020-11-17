import React from 'react';
import { ItemWrapper } from './style.js';

const Item = ({ type, content }) => {
  return (
    <ItemWrapper>
      {!type ? (
        <textarea
          value={content}
        />
      ): <p>Some new item</p>}
    </ItemWrapper>
  )
}

export default Item;