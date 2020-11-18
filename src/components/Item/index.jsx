import React from 'react';
import { ItemWrapper } from './style.js';
import Image from '../Image';

//a mapping table to render custom components
export const componentMappings = {
  img: (content) => <Image {...content} updateItem={updateItem} />
};

const Item = ({ type, content, updateItem, handleKeyPress }) => {
  const textBox = React.useRef();

  //told browser to immediately focus on the textarea
  React.useEffect(() => {
    if (!type) {
      textBox.current.focus();
    }
  });

  return (
    <ItemWrapper>
      {!type ? (
        <textarea
          ref={textBox}
          value={content}
          onChange={(e) => updateItem(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      ): componentMappings[type](content), updateItem}
    </ItemWrapper>
  )
}

export default Item;