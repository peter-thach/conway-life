import React from 'react';
import Grid from './Grid';
import NavigationBar from './NavigationBar';
import Legend from './Legend';

class Game extends React.Component {
  constructor(props) {
    super(props);

    // initialize 2d array to store the state of the game
    let abc = Array(27);
    for(var i=0; i < 30; i++) {
      abc[i] = Array(73);
      for(var j=0; j < 79; j++) {
        abc[i][j] = 0;
      }
    }
    this.state = {
      squares: abc
    }
  }

  // change value at squares[x][y]
  handleClick(x, y) {
    const squares = this.state.squares.slice();
    squares[x][y] = squares[x][y] === 0 ? 1 : 0;
    this.setState({squares: squares});
  }

  handleClickNav(command) {
    if(command === 'clear') {
      // clears the grid of alive cells
      const temp = this.state.squares;
      for(var i=0; i < 30; i++) {
        for(var j=0; j < 79; j++) {
          temp[i][j] = 0;
        }
      }
      this.setState({sqares: temp});
    }
    // pressing the randomize button makes it so that each cell has a 1/10 probability to be alive, 1/10 so that there isn't a lot of clutter
    if(command === 'randomize') {
      const values = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
      const temp = this.state.squares;
      for(var i=0; i < 30; i++) {
        for(var j=0; j < 79; j++) {
          temp[i][j] = values[Math.floor(Math.random() * 10)]
        }
      }
      this.setState({squares: temp});
    }
  }

  render() {
    return (
      <div>
        <NavigationBar 
          onClick={(command) => this.handleClickNav(command)}
        />
        <Legend />
        <div className="game">
          <div className="game-grid">
            <Grid
              squares={this.state.squares}
              onClick={(x, y) => this.handleClick(x, y)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Game;