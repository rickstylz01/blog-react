import React from 'react';
import { ItemWrapper } from './style.js';

const Item = ({ type, content, updateItem, handleKeyPress }) => {
  const textBox = React.useRef();

  //told browser to immediately focus on the textarea
  React.useEffect(() => {
    textBox.current.focus();
  });

  return (
    <ItemWrapper>
      {!type ? (
        <textarea
          onKeyPress={handleKeyPress}
          ref={textBox}
          value={content}
          onChange={(e) => updateItem(e.target.value)}
        />
      ): componentMappings[type](content)}
    </ItemWrapper>
  )
}

const componentMappings = {
  img: (content) => <Image {...content} />
};

export default Item;