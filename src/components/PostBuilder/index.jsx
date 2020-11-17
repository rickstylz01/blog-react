import React from 'react';
//had to enter uuid with default version
import {v4 as uuid} from 'uuid';
import Item from '../Item';

const PostBuilder = () => {
  const [items, setItems] = React.useState([{
    type: null,
    content: '',
    id: uuid(),
  }]);

  //add new items to the items state field
  const addItem = (type, content) => {
    setItems(state => [...state, { type, content, id: uuid() }])
  };

  //update the content of a specific item
  const updateItem = (id, newContent) => {
    setItems(state => {
      const itemIndex = state.findIndex(item => item.id === id);
      const newState = [...state];
      newState[itemIndex].content = newContent;
      return newState;
    });
  };

  return (
    <div className="post">
      {items.map(item => (
        <Item 
          key={item.id}
          type={item.type}
          content={item.content}
          updateItem={(newContent) => updateItem(item.id, newContent)}
        />
      ))}
    </div>
  );
};

export default PostBuilder;