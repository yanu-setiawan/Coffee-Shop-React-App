import logo from "../../logo.svg";
import "./App.css";
import React, { Component, Fragment } from "react";
import Footer from "../../components/templates/Footer";
import Header from "../../components/templates/Header";
import withNavigate from "../../utils/wrapper/withNavigate";

// class{}
class App extends Component {
  //state merupakan variabel lokal dari class (object)
  //
  //
  state = {
    counter: 0,
  };
  changeCounter = () => {
    this.setState({
      counter: 2,
    });
  };
  render() {
    console.log(this.state.counter);
    return (
      <>
        <Header />
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <p>Counter : {this.state.counter}</p>
            <button onClick={this.changeCounter} className="text-5xl">
              Change Counter
            </button>
          </header>
        </div>
        <div></div>
        <Footer />
      </>
    );
  }
}

const AppWithNavigate = withNavigate(App);
export default AppWithNavigate;
