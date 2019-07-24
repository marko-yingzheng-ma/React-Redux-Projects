import React from 'react';
import ReactDOM from 'react-dom';

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
      return (<div>Current latitude is: {this.state.lat}</div>);
    }

    if (this.state.errorMessage) {
      return (<div>Error: {this.state.errorMessage}</div>)
    }
    
    return (<div>Loading....</div>)
  }
};

ReactDOM.render(<App />, document.querySelector('#root'));