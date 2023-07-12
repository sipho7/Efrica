import logo from './logo.svg';
import './App.css';
//import Posts from "./components/post";
//import Navbar from "./components/blog"
import React from "react"
//import { useState, useEffect } from "react";

class App extends React.Component {
  state = {
    name: ""
  }
  /*const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, [])*/

  componentDidMount() {
    fetch("http://localhost:3001")
      .then(res => res.json())
      .then(data => this.setState({ name: data.name }))
  }

  render() {
    //console.log(this.state.name, 'Sipho')
    return (

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
      </header>
      <div className="main-container" style={{backgroundColor: "aliceblue"}}>
        
    </div>
    </div>
    
  );
}
}
export default App;
