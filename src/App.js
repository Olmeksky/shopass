import React from 'react';
import Header from "./components/Header"
import Footer from "./components/Footer"

import './App.css';


class App extends React.Component {
  render() {
    return (
      <div class="wrapper">
        <Header></Header>
        <div class="container">
          <h1 class="hero_title">Все товары</h1>

          <div class="hide_block">
            <button class="btn btn-success">Success Button!</button>
            <button class="btn btn-primary">Primary Button!</button>
            <button class="btn btn-danger">Danger Button!</button>
            <div class="alert alert-success">
              <p>This is success alert.</p>
            </div> 
            <div class="alert alert-primary">
              <p>This is primary alert.</p>
            </div> 
            <div class="alert alert-danger">
              <p>This is danger alert.</p>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}


/*
function App() {
    return (
      <div class="wrapper">
        <Header></Header>
        <div class="container">
          <h1>Все товары</h1>
          <button class="btn btn-success">Success Button!</button>
          <button class="btn btn-primary">Primary Button!</button>
          <button class="btn btn-danger">Danger Button!</button>
          <div class="alert alert-success">
            <p>This is success alert.</p>
          </div> 
          <div class="alert alert-primary">
            <p>This is primary alert.</p>
          </div> 
          <div class="alert alert-danger">
            <p>This is danger alert.</p>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
}
*/
  

export default App;