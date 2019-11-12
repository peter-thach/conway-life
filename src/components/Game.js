import React from 'react';
import Grid from './Grid';
import NavigationBar from './NavigationBar';
import Legend from './Legend';

class Game extends React.Component {
  constructor(props) {
    super(props);

    // initialize 2d array to store the state of the game
    let abc = Array(30);
    for(var i=0; i < abc.length; i++) {
      abc[i] = Array(79);
      for(var j=0; j < abc[i].length; j++) {
        abc[i][j] = 0;
      }
    }
    this.state = {
      squares: abc,
      start: 'Start Simulation!',
      variant: 'success',
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
    // starts the game
    if(command === 'start') {
      // change the start button to a stop button and vice versa
      if(this.state.variant === 'success') {
        this.setState({
          start: 'Stop Simulation',
          variant: 'danger',
        })
        this.startGame();
      }
      else {
        this.setState({
          start: 'Start Simulation!',
          variant: 'success',
        })
      }
    }

    
  }
  
  startGame() {
    function loop() {
      if(this.state.variant === 'danger') {
        let neighbors = Array(30);
        for(var i = 0; i < neighbors.length; i++) {
          neighbors[i] = Array(79);
          for(var j = 0; j < neighbors[i].length; j++) {
            neighbors[i][j] = 0;
          }
        }

        for(var i = 0; i < 30; i++) {
          for(var j = 0; j < 79; j++) {
            // do the corner first
            if(i === 0 && j === 0) {
              neighbors[i][j] = this.state.squares[i+1][j] + this.state.squares[i][j+1] + this.state.squares[i+1][j+1];
            }
            else if(i === 0 && j === neighbors[0].length - 1) {
              neighbors[i][j] = this.state.squares[i][j-1] + this.state.squares[i+1][j-1] + this.state.squares[i+1][j];
            }
            else if(i === neighbors.length - 1 && j === 0) {
              neighbors[i][j] = this.state.squares[i-1][j] + this.state.squares[i-1][j+1] + this.state.squares[i][j+1];
            }
            else if(i === neighbors.length - 1 && j === neighbors[0].length - 1) {
              neighbors[i][j] = this.state.squares[i-1][j] + this.state.squares[i-1][j-1] + this.state.squares[i][j-1];
            }
            // now the edges
            else if(i === 0) {
              neighbors[i][j] = this.state.squares[i][j-1] + this.state.squares[i+1][j-1] + this.state.squares[i+1][j] + this.state.squares[i+1][j+1] + this.state.squares[i][j+1];
            }
            else if(i === neighbors.length - 1) {
              neighbors[i][j] = this.state.squares[i][j-1] + this.state.squares[i-1][j-1] + this.state.squares[i-1][j] + this.state.squares[i-1][j+1] + this.state.squares[i][j+1];
            }
            else if(j === 0) {
              neighbors[i][j] = this.state.squares[i-1][j] + this.state.squares[i-1][j+1] + this.state.squares[i][j+1] + this.state.squares[i+1][j+1] + this.state.squares[i+1][j];
            }
            else if(j === neighbors[0].length - 1) {
              neighbors[i][j] =  this.state.squares[i-1][j] + this.state.squares[i-1][j-1] + this.state.squares[i][j-1] + this.state.squares[i+1][j-1] + this.state.squares[i+1][j];
            }
            // general case
            else {
              neighbors[i][j] = this.state.squares[i-1][j-1] + this.state.squares[i-1][j] + this.state.squares[i-1][j+1] + this.state.squares[i][j+1] + 
                                this.state.squares[i+1][j+1] + this.state.squares[i+1][j] + this.state.squares[i+1][j-1] + this.state.squares[i][j-1];
            }
          }
        }

        let newArr = Array(30);
        for(var i = 0; i < newArr.length; i++) {
          newArr[i] = Array(79);
          for(var j = 0; j < newArr[i].length; j++) {
            if(this.state.squares[i][j] == 1) {
              if(neighbors[i][j] < 2) {
                newArr[i][j] = 0;
              }
              else if(neighbors[i][j] > 3) {
                newArr[i][j] = 0;
              }
              else {
                newArr[i][j] = 1;
              }
            }
            else {
              if(neighbors[i][j] == 3) {
                newArr[i][j] = 1;
              }
              else {
                newArr[i][j] = 0;
              }
            }
          }
        }
        this.setState({squares: newArr});
      }

      if(this.state.variant === 'danger') setTimeout(loop, 0);
    }

    loop();
  }

  render() {
    return (
      <div>
        <NavigationBar 
          onClick={(command) => this.handleClickNav(command)}
          start={this.state.start}
          variant={this.state.variant}
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