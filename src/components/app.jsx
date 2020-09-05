import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import GifList from './gif_list';
import SelectedGif from './selected_gif';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "1o1r3yTBRDpvqz3B29",
    };
  }

  updateGif = (e) => {
    giphy("RWKxeBAYUzwNsEWxmRDRr8plikoy1sJm")
      .search({
        q: e,
        limit: 15
      }, (err, res) => {
        this.setState({
          gifs: res.data
        });
      });
  }

  render() {
    const { selectedGifId, gifs } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar updateGif={this.updateGif} />
          <SelectedGif id={selectedGifId} />
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
