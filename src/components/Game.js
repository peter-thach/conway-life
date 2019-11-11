import React from 'react';
import Grid from './Grid';

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

  render() {
    return (
      <div className="game">
        <div className="game-grid">
          <Grid
            squares={this.state.squares}
            onClick={(x, y) => this.handleClick(x, y)}
          />
        </div>
      </div>
    );
  }
}

export default Game;