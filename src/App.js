import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Button, Input, Menu } from "semantic-ui-react";
// import { MyHeader } from "./Components/MyHeader";
import MyHeader from "./Components/MyHeader";
import MenuExample from "./Components/MenuExample";
import WebexEntry from './Components/WebexEntry';


// const MyHeader = ({name}) => {
//   return (
//       <div>
//           <h1>Hello {name}</h1>
//       </div>
//   )
// }
function App() {
  return (
    
    <div className='Web-Ex'>
      {/* <div className="App">
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
    </div> */}
      {/* <MenuExample></MenuExample> */}
      <MyHeader name={"Aabid"}/>
      <WebexEntry></WebexEntry>

    </div>
  );
}

class ShoppingList extends React.Component {
  render() {
    let user = {
      name: "aabid",
      roll: 1
    }
    return <div></div>
    // <div>
    //   <h1>Hello</h1>
    // </div>

  }
}

export default App;
