import React from 'react';
import { ItemWrapper } from './style.js';

const Item = ({ type, content }) => {
  const textBox = React.useRef();

  React.useEffect(() => {
    textBox.current.focus();
  });

  return (
    <ItemWrapper>
      {!type ? (
        <textarea
          ref={textBox}
          value={content}
        />
      ): <p>Some new item</p>}
    </ItemWrapper>
  )
}

export default Item;