import React from 'react';
import { ItemWrapper } from './style.js';

const Item = ({ type, content, updateItem }) => {
  const textBox = React.useRef();

  //told browser to immediately focus on the textarea
  React.useEffect(() => {
    textBox.current.focus();
  });

  return (
    <ItemWrapper>
      {!type ? (
        <textarea
          ref={textBox}
          value={content}
          onChange={(e) => updateItem(e.target.value)}
        />
      ): <p>Some new item</p>}
    </ItemWrapper>
  )
}

export default Item;