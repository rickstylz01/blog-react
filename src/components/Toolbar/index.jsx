import React from 'react';
import { componentMappings } from '../Item';
import { ToolbarWrapper } from './style';

//allows user to choose which new item to add to the post
const Toolbar = ({ addItem }) => (
  <ToolbarWrapper>
    {Object.keys(componentMappings).map(key => (
      <button onClick={() => addItem(key, {})}>
        {key}
      </button>
    ))}
  </ToolbarWrapper>
);

export default Toolbar;