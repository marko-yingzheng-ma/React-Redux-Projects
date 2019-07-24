import React from 'react';
import ReactDOM from 'react-dom';
import SeasonalDisplay from './SeasonalDisplay';

class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    console.log('Component mounted');
    window.navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      this.setState({ lat: position.coords.latitude });
    },(error) => {
      console.log(error);
      this.setState({ errorMessage: error.message });
    })
  }

  componentDidUpdate() {
    console.log('Component updated');
  }

  render() {
    if (this.state.lat) {
      return <SeasonalDisplay lat={this.state.lat}/>
    }

    if (this.state.errorMessage) {
      return (<div>Error: {this.state.errorMessage}</div>)
    }
    
    return (<div>Loading....</div>)
  }
};

ReactDOM.render(<App />, document.querySelector('#root'));