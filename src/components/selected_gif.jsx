import React from 'react';
import Gif from './gif';

const SelectedGif = (props) => {
  const { id } = props;
  return (
    <div className="selected-gif">
      <Gif id={id} />
    </div>
  );
};

export default SelectedGif;
