import React, { Component } from 'react';
import './App.css';
import StartScreen from './screen/StartScreen';

class App extends Component {

  state = {
    screen:StartScreen,
    data : {}
  };

  changeState(screen,data){
    switch(screen){
        case "StartScreen":
          this.setState({
            screen:StartScreen,
            data : data
          });
          break;
        default:
          this.setState({
            screen:StartScreen,
            data : data
          });
          break;
    }
  }

  render() {
    return (
      <center>
            < this.state.screen handleClick={this.changeState.bind(this)} data={this.state.data} ref={this.element} />
      </center>
    );
  }
}

export default App;
