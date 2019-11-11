import React from 'react';
import Game from './components/Game';
import Legend from './components/Legend';
import NavigationBar from './components/NavigationBar';

class App extends React.Component {
  
  render() {
    return (
      <div>
        <NavigationBar />
        <Legend />
        <Game />
      </div>
    );
  }
}

export default App;
