import React from 'react';
import { ImageWrapper } from './style.js'

const EditImage = ({ updateItem }) => { 
  const [src, setSrc] = React.useState('');
  const [alt, setAlt] = React.useState('');

  const updateImageProperties = (e) => {
    updateItem({ src, alt });
  }

  return (
    <div className="create-img">
      <input placeholder="Add src" value={src} onChange={e => setSrc(e.target.value)} />
      <input placeholder="Add alt" value={alt} onChange={e => setAlt(e.target.value)} />
      <button onClick={updateImageProperties}>Submit</button>
    </div>
  )
}

const Image = ({ src, alt, updateItem }) => (
  <ImageWrapper>
    { src && alt ? <img src={src} alt={alt} /> : <EditImage updateItem={updateItem} />}
  </ImageWrapper>
);

export default Image;