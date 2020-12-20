import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, long: null, errorMessage: "" };
    window.navigator.geolocation.getCurrentPosition(
      (pos) => {
        console.log(pos);
        this.setState({ lat: pos.coords.latitude, long: pos.coords.longitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
  
  componentDidMount(){
      console.log("MOUNTED")
  }


  
  componentDidUpdate(){
    console.log("Updated")
}

  render() {
    if (!this.state.errorMessage && !this.state.lat && !this.state.long) {
      return <div>LOADING.....</div>;
    }

    if (!this.state.errorMessage && this.state.lat && this.state.long) {
      return (
        <div>
          Latitude : {this.state.lat}, Longitude : {this.state.long}
        </div>
      );
    }

    if (this.state.errorMessage) {
      return <div>ERROR GETTING STUFF: {this.state.errorMessage};</div>;
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
