import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchSubmit(searchTerm) {
    console.log(searchTerm);
  }

  render() {
    return (
      <div className="ui container from ipad " style={{ marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
};

export default App;