//import logo from './logo.svg';
import './App.css';
//import Posts from "./components/post";
//import Menu1 from "./components/menu/menu";
import SzhsinMenu from "./components/menu/szhsinmenu";
import Home from "./components/home/home";
import React from "react"
//import Tooltip1 from "./components/tooltip";
//import ReactDOM from 'react-dom/client';
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
    

    return (

    <div className="App">
      
      
      
      <SzhsinMenu/>
      
      <Home/>
      
    </div>
    
  );
}
}
export default App;
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App />);