import React from 'react';

const Gif = (props) => {
  const url = `https://media4.giphy.com/media/${props.id}/giphy.gif`;
  return (
    <img src={url} alt="" className="gif" />
  );
}

export default Gif;
