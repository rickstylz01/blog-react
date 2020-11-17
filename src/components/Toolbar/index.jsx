import React from 'react';
import { componentMappings } from '../Item';

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