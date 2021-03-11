import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loading from "./Loading";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  state = { lat: null, long: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (pos) => {
        this.setState({ lat: pos.coords.latitude, long: pos.coords.longitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  componentDidUpdate() {
    console.log("Updated");
  }

  renderContent() {
    if (!this.state.errorMessage && !this.state.lat) {
      return <Loading />;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}></SeasonDisplay>;
    }

    if (this.state.errorMessage) {
      return <div>ERROR GETTING STUFF: {this.state.errorMessage};</div>;
    }
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
