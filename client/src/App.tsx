import React from "react";
import logo from "./logo.svg";
import "./App.css";

interface AppProps {
  message: string;
}

class App extends React.Component {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch("/data")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Loading...</p>
        </header>
      </div>
    );
  }
}

export default App;
