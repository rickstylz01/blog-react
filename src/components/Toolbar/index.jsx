import React from 'react';
import { componentMappings } from '../Item';

//allows user to choose which new item to add to the post
const Toolbar = ({ addItem }) => (
  <div className="toolbar">
    {Object.keys(componentMappings).map(key => (
      <button onClick={() => addItem(key, {})}>
        {key}
      </button>
    ))}
  </div>
);

export default Toolbar;