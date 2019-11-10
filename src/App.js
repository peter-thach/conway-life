import React from 'react';
import Grid from './components/Grid';
import NavigationBar from './components/NavigationBar';

class App extends React.Component {
  
  render() {
    return (
      <div>
        <NavigationBar />
        <Grid />
      </div>
    );
  }
}

export default App;
