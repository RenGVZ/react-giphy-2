import React from 'react';
import Gif from './gif';

const GifList = (props) => {
  const { gifs } = props;
  return (
    <div>
      {gifs.map((gif) => {
        return (
          <div className="gif-list">
            <Gif id={gif} key={gif} />
          </div>
        );
      })}
    </div>
  );
};

export default GifList;
