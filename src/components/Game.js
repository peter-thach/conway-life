import React from 'react';
import Grid from './Grid';
import NavigationBar from './NavigationBar';
import Legend from './Legend';
import { selectPattern, setPattern } from '../utils/Patterns';
import { gameLogic } from '../utils/gameLogic';

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
      speed: 'Normal',
      delay: 750,
      patterntype: null,
      pattern: null,
      patterngrid: null,
    }
  }

  // change value at squares[x][y]
  handleClick(x, y) {
    // disable the cells from being altered during the simulation
    if(this.state.start == 'Stop Simulation') { 
      return;
    }

    // clicking to place a pattern
    // go through patterngrid and set all 2s to 1s, use that as the actual grid, set patterngrid to null
    if(this.state.patterngrid) {
      for(var i = 0; i < this.state.patterngrid.length; i++) {
        for(var j = 0; j < this.state.patterngrid[i].length; j++) {
          if(this.state.patterngrid[i][j] === 2) {
            this.state.patterngrid[i][j] = 1;
          }
        }
      }
      let temp1 = JSON.parse(JSON.stringify(this.state.patterngrid));
      this.setState({squares: temp1, pattern: '', patterntype: null, patterngrid: null});
    }
    else {
      const squares = this.state.squares.slice();
      squares[x][y] = squares[x][y] === 0 ? 1 : 0;
      this.setState({squares: squares});
    }
  }

  // Use imported selectPattern function to highlight the cells on mouseHover according to the selected pattern
  onMouseOver(x, y) {
    selectPattern.call(this, x, y);
  }

  handleClickNav(patterntype, command) {
    if(command === 'clear') {
      // prevent the board from being cleared during the simulation
      if(this.state.start == 'Stop Simulation') {
        return;
      }

      // clears the grid of alive cells
      const temp = this.state.squares.slice();
      for(var i=0; i < 30; i++) {
        for(var j=0; j < 79; j++) {
          temp[i][j] = 0;
        }
      }
      this.setState({squares: temp});
    }
    // pressing the randomize button makes it so that each cell has a 1/8 probability to be alive; 1/8 so that there isn't a lot of clutter
    else if(command === 'randomize') {
      // prevent the board from being randomized during the simulation
      if(this.state.start == 'Stop Simulation') {
        return;
      }

      const values = [0, 0, 0, 0, 0, 0, 0, 1];
      const temp = this.state.squares.slice();
      for(var i=0; i < 30; i++) {
        for(var j=0; j < 79; j++) {
          temp[i][j] = values[Math.floor(Math.random() * 10)]
        }
      }
      this.setState({squares: temp});
    }
    // starts the game
    else if(command === 'start') {
      // change the start button to a stop button and vice versa
      if(this.state.variant === 'success') {
        this.setState({
          start: 'Stop Simulation',
          variant: 'danger',
          pattern: '',
          patterngrid: null,
        },
        () => {this.startGame()})
      }
      else {
        this.setState({
          start: 'Start Simulation!',
          variant: 'success',
        })
      }
    }

    // setting the speed
    else if(command ===  'Slow') {
      this.setState({speed: 'Slow', delay: 1500});
    }
    else if(command  === 'Normal') {
      this.setState({speed: 'Normal', delay: 750});
    }
    else if(command === 'Fast') {
      this.setState({speed: 'Fast', delay: 100});
    }

    // setting the pattern
    else{
      this.setState({patterntype: patterntype});
      setPattern.call(this, command);
    }
  }
  
  startGame() {
    gameLogic.call(this);
  }

  render() {
    return (
      <div>
        <NavigationBar 
          onClick={(patterntype, command) => this.handleClickNav(patterntype, command)}
          start={this.state.start}
          variant={this.state.variant}
          speed={this.state.speed}
        />
        <Legend />
        <div className="game">
          <div className="game-grid">
            <Grid
              squares={this.state.squares}
              patterngrid={this.state.patterngrid}
              onClick={(x, y) => this.handleClick(x, y)}
              onMouseOver={(x, y) => this.onMouseOver(x, y)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Game;