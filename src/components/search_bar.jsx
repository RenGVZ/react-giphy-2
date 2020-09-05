import React from 'react';

const SearchBar = (props) => {
  return (
    <div className="form-search">
      <input
        type="text"
        placeholder="Start typing..."
        onChange={e => props.updateGif(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
