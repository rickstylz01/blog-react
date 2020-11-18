import React from 'react';

const EditImage = ({ updateItem }) => { 
  const [src, setSrc] = React.useState('');
  const [alt, setAlt] = React.useState('');

  const updateImageProperties = () => {

  }

  return (
    <div>
      <input placeholder="Add src" value={src} onChange={e => setSrc(e.target.value)} />
      <input placeholder="Add alt" value={alt} onChange={e => setAlt(e.target.value)} />
      <button onClick={updateImageProperties}>Submit</button>
    </div>
  )
}

const Image = ({ src, alt }) => (
  <div>
    <img src={src} alt={alt} ? <img src={src} alt={alt} /> : <EditImage />
  </div>
);

export default Image;