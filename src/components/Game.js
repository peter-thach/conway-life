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
      speed: 'Normal',
      delay: 750,
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
      this.setState({squares: temp1, pattern: '', patterngrid: null});
    }
    else {
      const squares = this.state.squares.slice();
      squares[x][y] = squares[x][y] === 0 ? 1 : 0;
      this.setState({squares: squares});
    }
  }

  // START of logic for selected patterns highlighting grid
  onMouseOver(x, y) {
    if(this.state.pattern) {
      if(this.state.pattern === 'tri1') {
        // JSON.parse allows deep copy of multidimensional array
        let copy = JSON.parse(JSON.stringify(this.state.squares));
        copy[x][y] = 2;
        if(x > 0 && y < copy[0].length - 1) {
          copy[x-1][y+1] = 2;
        }
        if(x < copy.length - 1) {
          copy[x+1][y] = 2;
        }
        this.setState({patterngrid: copy});
      }
      else if(this.state.pattern === 'tri2' || this.state.pattern === 'blinker') {
        let copy = JSON.parse(JSON.stringify(this.state.squares));
        copy[x][y] = 2;
        if(x > 0) {
          copy[x-1][y] = 2;
        }
        if(x < copy.length - 1) {
          copy[x+1][y] = 2;
        }
        this.setState({patterngrid: copy});
      }
      else if(this.state.pattern === 'tri3') {
        let copy = JSON.parse(JSON.stringify(this.state.squares));
        copy[x][y] = 2;
        if(y < copy[0].length - 1) {
          copy[x][y+1] = 2;
        }
        if(x < copy.length - 1) {
          copy[x+1][y] = 2;
        }
        this.setState({patterngrid: copy});
      }
      else if(this.state.pattern === 'tri4') {
        let copy = JSON.parse(JSON.stringify(this.state.squares));
        copy[x][y] = 2;
        if(x > 0) {
          copy[x-1][y+1] = 2;
        }
        if(x < copy.length - 1 && y > 0) {
          copy[x+1][y-1] = 2;
        }
        this.setState({patterngrid: copy});
      }
      else if(this.state.pattern === 'tet1') {
        let copy = JSON.parse(JSON.stringify(this.state.squares));
        copy[x][y] = 2;
        if(y < copy[0].length - 1) {
          copy[x+1][y] = 2;
        }
        if(x < copy.length - 1) {
          copy[x+1][y] = 2;
        }
        if(x < copy.length - 2) {
          copy[x+2][y] = 2;
        }
        this.setState({patterngrid: copy});
      }
      else if(this.state.pattern === 'tet2') {
        let copy = JSON.parse(JSON.stringify(this.state.squares));
        copy[x][y] = 2;
        if(y < copy[0].length - 1) {
          copy[x][y+1] = 2;
        }
        if(y < copy[0].length - 2) {
          copy[x][y+2] = 2
        }
        if(x < copy.length - 1) {
          copy[x+1][y] = 2;
        }
        this.setState({patterngrid: copy});
      }
      else if(this.state.pattern === 'tet3') {
        let copy = JSON.parse(JSON.stringify(this.state.squares));
        copy[x][y] = 2;
        if(x > 0 && y > 0) {
          copy[x-1][y-1] = 2;
        }
        if(y < copy[0].length - 1) {
          copy[x][y+1] = 2
        }
        if(y < copy[0].length - 2) {
          copy[x][y+2] = 2
        }
        this.setState({patterngrid: copy});
      }
      else if(this.state.pattern === 'tet4') {
        let copy = JSON.parse(JSON.stringify(this.state.squares));
        copy[x][y] = 2;
        if(x > 0) {
          copy[x-1][y] = 2;
        }
        if(y < copy[0].length - 1) {
          copy[x][y+1] = 2
        }
        if(y > 0) {
          copy[x][y-1] = 2
        }
        this.setState({patterngrid: copy});
      }
      else if(this.state.pattern === 'square') {
        let copy = JSON.parse(JSON.stringify(this.state.squares));
        copy[x][y] = 2;
        if(y < copy[0].length - 1) {
          copy[x][y+1] = 2;
        }
        if(x < copy.length - 1) {
          copy[x+1][y] = 2
        }
        if(x < copy.length - 1 && y < copy[0].length - 1) {
          copy[x+1][y+1] = 2
        }
        this.setState({patterngrid: copy});
      }
      else if(this.state.pattern === 'boat') {
        let copy = JSON.parse(JSON.stringify(this.state.squares));
        copy[x][y] = 2;
        if(y < copy[0].length - 1) {
          copy[x][y+1] = 2;
        }
        if(x < copy.length - 1) {
          copy[x+1][y] = 2;
        }
        if(x < copy.length - 1 && y < copy[0].length - 2) {
          copy[x+1][y+2] = 2;
        }
        if(x < copy.length - 2 && y < copy[0].length - 1) {
          copy[x+2][y+1] = 2;
        }
        this.setState({patterngrid: copy});
      }
      else if(this.state.pattern === 'loaf') {
        let copy = JSON.parse(JSON.stringify(this.state.squares));
        copy[x][y] = 2;
        if(y < copy[0].length - 1) {
          copy[x][y+1] = 2;
        }
        if(x < copy.length - 1 && y < copy[0].length - 2) {
          copy[x+1][y+2] = 2;
        }
        if(x < copy.length - 2 && y < copy[0].length - 1) {
          copy[x+2][y+1] = 2;
        }
        if(x < copy.length - 1 && y > 0) {
          copy[x+1][y-1] = 2;
        }
        if(x < copy.length - 2 && y > 0) {
          copy[x+2][y-1] = 2;
        }
        if(x < copy.length - 3) {
          copy[x+3][y] = 2;
        }
        this.setState({patterngrid: copy});
      }
      else if(this.state.pattern === 'ship') {
        let copy = JSON.parse(JSON.stringify(this.state.squares));
        copy[x][y] = 2;
        if(y < copy[0].length - 1) {
          copy[x][y+1] = 2;
        }
        if(x < copy.length - 1) {
          copy[x+1][y] = 2;
        }
        if(x < copy.length - 1 && y < copy[0].length - 2) {
          copy[x+1][y+2] = 2;
        }
        if(x < copy.length - 2 && y < copy[0].length - 1) {
          copy[x+2][y+1] = 2;
        }
        if(x < copy.length - 2 && y < copy[0].length - 2) {
          copy[x+2][y+2] = 2;
        }
        this.setState({patterngrid: copy});
      }
      else if(this.state.pattern === 'beehive') {
        let copy = JSON.parse(JSON.stringify(this.state.squares));
        copy[x][y] = 2;
        if(y < copy[0].length - 1) {
          copy[x][y+1] = 2;
        }
        if(x < copy.length - 1 && y < copy[0].length - 2) {
          copy[x+1][y+2] = 2;
        }
        if(x < copy.length - 2 && y < copy[0].length - 1) {
          copy[x+2][y+1] = 2;
        }
        if(x < copy.length - 1 && y > 0) {
          copy[x+1][y-1] = 2;
        }
        if(x < copy.length - 2) {
          copy[x+2][y] = 2;
        }
        this.setState({patterngrid: copy});
      }
      else if(this.state.pattern === 'tub') {
        let copy = JSON.parse(JSON.stringify(this.state.squares));
        copy[x][y] = 2;
        if(x > 0 && y < copy[0].length - 1) {
          copy[x-1][y+1] = 2;
        }
        if(x < copy.length - 1 && y < copy[0].length - 1) {
          copy[x+1][y+1] = 2;
        }
        if(y < copy[0].length - 2) {
          copy[x][y+2] = 2;
        }
        this.setState({patterngrid: copy});
      }
      else if(this.state.pattern === 'toad') {
        let copy = JSON.parse(JSON.stringify(this.state.squares));
        copy[x][y] = 2;
        if(y < copy[0].length - 1) {
          copy[x][y+1] = 2;
        }
        if(y < copy[0].length - 2) {
          copy[x][y+2] = 2;
        }
        if(x < copy.length - 1 && y > 0) {
          copy[x+1][y-1] = 2;
        }
        if(x < copy.length - 1) {
          copy[x+1][y] = 2;
        }
        if(x < copy.length - 1 && y < copy[0].length - 1) {
          copy[x+1][y+1] = 2;
        }
        this.setState({patterngrid: copy});
      }
      else if(this.state.pattern === 'beacon') {
        let copy = JSON.parse(JSON.stringify(this.state.squares));
        copy[x][y] = 2;
        if(y > 0) {
          copy[x][y-1] = 2;
        }
        if(x > 0) {
          copy[x-1][y] = 2;
        }
        if(x > 0 && y > 0) {
          copy[x-1][y-1] = 2;
        }
        if(x < copy.length - 1 && y < copy[0].length - 1) {
          copy[x+1][y+1] = 2;
        }
        if(x < copy.length - 1 && y < copy[0].length - 2) {
          copy[x+1][y+2] = 2;
        }
        if(x < copy.length - 2 && y < copy[0].length - 1) {
          copy[x+2][y+1] = 2;
        }
        if(x < copy.length - 2 && y < copy[0].length - 2) {
          copy[x+2][y+2] = 2;
        }
        this.setState({patterngrid: copy});
      }
      else if(this.state.pattern === 'pulsar') {
        let copy = JSON.parse(JSON.stringify(this.state.squares));
        if(x > 0 && y > 1) {
          copy[x-1][y-2] = 2;
        }
        if(x > 0 && y > 2) {
          copy[x-1][y-3] = 2;
        }
        if(x > 0 && y > 3) {
          copy[x-1][y-4] = 2;
        }
        if(x > 1 && y > 0) {
          copy[x-2][y-1] = 2;
        }
        if(x > 2 && y > 0) {
          copy[x-3][y-1] = 2;
        }
        if(x > 3 && y > 0) {
          copy[x-4][y-1] = 2;
        }
        if(x > 1 && y > 5) {
          copy[x-2][y-6] = 2;
        }
        if(x > 2 && y > 5) {
          copy[x-3][y-6] = 2;
        }
        if(x > 3 && y > 5) {
          copy[x-4][y-6] = 2;
        }
        if(x > 5 && y > 1) {
          copy[x-6][y-2] = 2;
        }
        if(x > 5 && y > 2) {
          copy[x-6][y-3] = 2;
        }
        if(x > 5 && y > 3) {
          copy[x-6][y-4] = 2;
        }

        if(x < copy.length - 1 && y > 1) {
          copy[x+1][y-2] = 2;
        }
        if(x < copy.length - 1 && y > 2) {
          copy[x+1][y-3] = 2;
        }
        if(x < copy.length - 1 && y > 3) {
          copy[x+1][y-4] = 2;
        }
        if(x < copy.length - 2 && y > 0) {
          copy[x+2][y-1] = 2;
        }
        if(x < copy.length - 3 && y > 0) {
          copy[x+3][y-1] = 2;
        }
        if(x < copy.length - 4 && y > 0) {
          copy[x+4][y-1] = 2;
        }
        if(x < copy.length - 2 && y > 5) {
          copy[x+2][y-6] = 2;
        }
        if(x < copy.length - 3 && y > 5) {
          copy[x+3][y-6] = 2;
        }
        if(x < copy.length - 4 && y > 5) {
          copy[x+4][y-6] = 2;
        }
        if(x < copy.length - 6 && y > 1) {
          copy[x+6][y-2] = 2;
        }
        if(x < copy.length - 6 && y > 2) {
          copy[x+6][y-3] = 2;
        }
        if(x < copy.length - 6 && y > 3) {
          copy[x+6][y-4] = 2;
        }

        if(x < copy.length - 1 && y < copy[0].length - 2) {
          copy[x+1][y+2] = 2;
        }
        if(x < copy.length - 1 && y < copy[0].length - 3) {
          copy[x+1][y+3] = 2;
        }
        if(x < copy.length - 1 && y < copy[0].length - 4) {
          copy[x+1][y+4] = 2;
        }
        if(x < copy.length - 2 && y < copy[0].length - 1) {
          copy[x+2][y+1] = 2;
        }
        if(x < copy.length - 3 && y < copy[0].length - 1) {
          copy[x+3][y+1] = 2;
        }
        if(x < copy.length - 4 && y < copy[0].length - 1) {
          copy[x+4][y+1] = 2;
        }
        if(x < copy.length - 2 && y < copy[0].length - 6) {
          copy[x+2][y+6] = 2;
        }
        if(x < copy.length - 3 && y < copy[0].length - 6) {
          copy[x+3][y+6] = 2;
        }
        if(x < copy.length - 4 && y < copy[0].length - 6) {
          copy[x+4][y+6] = 2;
        }
        if(x < copy.length - 6 && y < copy[0].length - 2) {
          copy[x+6][y+2] = 2;
        }
        if(x < copy.length - 6 && y < copy[0].length - 3) {
          copy[x+6][y+3] = 2;
        }
        if(x < copy.length - 6 && y < copy[0].length - 4) {
          copy[x+6][y+4] = 2;
        }

        if(x > 0 && y < copy[0].length - 2) {
          copy[x-1][y+2] = 2;
        }
        if(x > 0 && y < copy[0].length - 3) {
          copy[x-1][y+3] = 2;
        }
        if(x > 0 && y < copy[0].length - 4) {
          copy[x-1][y+4] = 2;
        }
        if(x > 1 && y < copy[0].length - 1) {
          copy[x-2][y+1] = 2;
        }
        if(x > 2 && y < copy[0].length - 1) {
          copy[x-3][y+1] = 2;
        }
        if(x > 3 && y < copy[0].length - 1) {
          copy[x-4][y+1] = 2;
        }
        if(x > 1 && y < copy[0].length - 6) {
          copy[x-2][y+6] = 2;
        }
        if(x > 2 && y < copy[0].length - 6) {
          copy[x-3][y+6] = 2;
        }
        if(x > 3 && y < copy[0].length - 6) {
          copy[x-4][y+6] = 2;
        }
        if(x > 5 && y < copy[0].length - 2) {
          copy[x-6][y+2] = 2;
        }
        if(x > 5 && y < copy[0].length - 3) {
          copy[x-6][y+3] = 2;
        }
        if(x > 5 && y < copy[0].length - 4) {
          copy[x-6][y+4] = 2;
        }
        this.setState({patterngrid: copy});
      }
      else if(this.state.pattern === 'penta-decathlon') {
        let copy = JSON.parse(JSON.stringify(this.state.squares));
        if(x > 2) {
          copy[x-3][y] = 2;
        }
        if(x > 2 && y > 0) {
          copy[x-3][y-1] = 2;
        }
        if(x > 2 && y > 1) {
          copy[x-3][y-2] = 2;
        }
        if(x > 2 && y < copy[0].length - 1) {
          copy[x-3][y+1] = 2;
        }
        if(x > 2 && y < copy[0].length - 2) {
          copy[x-3][y+2] = 2;
        }
        if(x > 3) {
          copy[x-4][y] = 2;
        }
        if(x > 3 && y > 0) {
          copy[x-4][y-1] = 2;
        }
        if(x > 3 && y < copy[0].length - 1) {
          copy[x-4][y+1] = 2;
        }
        if(x > 4) {
          copy[x-5][y] = 2;
        }

        if(x < copy.length - 4) {
          copy[x+4][y] = 2;
        }
        if(x < copy.length - 4 && y > 0) {
          copy[x+4][y-1] = 2;
        }
        if(x < copy.length - 4 && y > 1) {
          copy[x+4][y-2] = 2;
        }
        if(x < copy.length - 4 && y < copy[0].length - 1) {
          copy[x+4][y+1] = 2;
        }
        if(x < copy.length - 4 && y < copy[0].length - 2) {
          copy[x+4][y+2] = 2;
        }
        if(x < copy.length - 5) {
          copy[x+5][y] = 2;
        }
        if(x < copy.length - 5 && y > 0) {
          copy[x+5][y-1] = 2;
        }
        if(x < copy.length - 5 && y < copy[0].length - 1) {
          copy[x+5][y+1] = 2;
        }
        if(x < copy.length - 6) {
          copy[x+6][y] = 2;
        }
        this.setState({patterngrid: copy});
      }
      else if(this.state.pattern == 'glider') {
        let copy = JSON.parse(JSON.stringify(this.state.squares));
        copy[x][y] = 2;
        if(y > 0) {
          copy[x][y-1] = 2;
        }
        if(y < copy[0].length - 1) {
          copy[x][y+1] = 2;
        }
        if(x > 0 && y < copy[0].length - 1) {
          copy[x-1][y+1] = 2
        }
        if(x > 1) {
          copy[x-2][y] = 2;
        }
        this.setState({patterngrid: copy});
      }
      else if(this.state.pattern == 'lwss') {
        let copy = JSON.parse(JSON.stringify(this.state.squares));
        copy[x][y] = 2;
        if(x < copy.length - 1) {
          copy[x+1][y] = 2;
        }
        if(x > 0 && y < copy[0].length - 1) {
          copy[x-1][y+1] = 2;
        }
        if(y < copy[0].length - 1) {
          copy[x][y+1] = 2;
        }
        if(x < copy.length - 1 && y < copy[0].length - 1) {
          copy[x+1][y+1] = 2;
        }
        if(x > 0 && y < copy[0].length - 2) {
          copy[x-1][y+2] = 2;
        }
        if(y < copy[0].length - 2) {
          copy[x][y+2] = 2;
        }
        if(x < copy.length - 2 && y < copy[0].length - 2) {
          copy[x+2][y+2] = 2;
        }
        if(y < copy[0].length - 3) {
          copy[x][y+3] = 2;
        }
        if(x < copy.length - 1 && y < copy[0].length - 3) {
          copy[x+1][y+3] = 2;
        }
        if(x < copy.length - 2 && y < copy[0].length - 3) {
          copy[x+2][y+3] = 2;
        }
        if(x < copy.length - 1 && y < copy[0].length - 4) {
          copy[x+1][y+4] = 2;
        }
        this.setState({patterngrid: copy});
      }
      else if(this.state.pattern == 'mwss') {
        let copy = JSON.parse(JSON.stringify(this.state.squares));
        copy[x][y] = 2;
        if(x < copy.length - 1) {
          copy[x+1][y] = 2;
        }
        if(x > 0 && y < copy[0].length - 1) {
          copy[x-1][y+1] = 2;
        }
        if(y < copy[0].length - 1) {
          copy[x][y+1] = 2;
        }
        if(x < copy.length - 1 && y < copy[0].length - 1) {
          copy[x+1][y+1] = 2;
        }
        if(x > 0 && y < copy[0].length - 2) {
          copy[x-1][y+2] = 2;
        }
        if(y < copy[0].length - 2) {
          copy[x][y+2] = 2;
        }
        if(x < copy.length - 1 && y < copy[0].length - 2) {
          copy[x+1][y+2] = 2;
        }
        if(x > 0 && y < copy[0].length - 3) {
          copy[x-1][y+3] = 2;
        }
        if(y < copy[0].length - 3) {
          copy[x][y+3] = 2;
        }
        if(x < copy.length - 2 && y < copy[0].length - 3) {
          copy[x+2][y+3] = 2;
        }
        if(y < copy[0].length - 4) {
          copy[x][y+4] = 2;
        }
        if(x < copy.length - 1 && y < copy[0].length - 4) {
          copy[x+1][y+4] = 2;
        }
        if(x < copy.length - 2 && y < copy[0].length - 4) {
          copy[x+2][y+4] = 2;
        }
        if(x < copy.length - 1 && y < copy[0].length - 5) {
          copy[x+1][y+5] = 2;
        }
        this.setState({patterngrid: copy});
      }
      else if(this.state.pattern == 'hwss') {
        let copy = JSON.parse(JSON.stringify(this.state.squares));
        copy[x][y] = 2;
        if(x < copy.length - 1) {
          copy[x+1][y] = 2;
        }
        if(x > 0 && y < copy[0].length - 1) {
          copy[x-1][y+1] = 2;
        }
        if(y < copy[0].length - 1) {
          copy[x][y+1] = 2;
        }
        if(x < copy.length - 1 && y < copy[0].length - 1) {
          copy[x+1][y+1] = 2;
        }
        if(x > 0 && y < copy[0].length - 2) {
          copy[x-1][y+2] = 2;
        }
        if(y < copy[0].length - 2) {
          copy[x][y+2] = 2;
        }
        if(x < copy.length - 1 && y < copy[0].length - 2) {
          copy[x+1][y+2] = 2;
        }
        if(x > 0 && y < copy[0].length - 3) {
          copy[x-1][y+3] = 2;
        }
        if(y < copy[0].length - 3) {
          copy[x][y+3] = 2;
        }
        if(x < copy.length - 1 && y < copy[0].length - 3) {
          copy[x+1][y+3] = 2;
        }
        if(x > 0 && y < copy[0].length - 4) {
          copy[x-1][y+4] = 2;
        }
        if(y < copy[0].length - 4) {
          copy[x][y+4] = 2;
        }
        if(x < copy.length - 2 && y < copy[0].length - 4) {
          copy[x+2][y+4] = 2;
        }
        if(y < copy[0].length - 5) {
          copy[x][y+5] = 2;
        }
        if(x < copy.length - 1 && y < copy[0].length - 5) {
          copy[x+1][y+5] = 2;
        }
        if(x < copy.length - 2 && y < copy[0].length - 5) {
          copy[x+2][y+5] = 2;
        }
        if(x < copy.length - 1 && y < copy[0].length - 6) {
          copy[x+1][y+6] = 2;
        }
        this.setState({patterngrid: copy});
      }
      else if(this.state.pattern == 'rpent') {
        let copy = JSON.parse(JSON.stringify(this.state.squares));
        copy[x][y] = 2;
        if(x > 0 && y < copy[0].length - 1) {
          copy[x-1][y+1] = 2;
        }
        if(y < copy[0].length - 1) {
          copy[x][y+1] = 2;
        }
        if(x < copy.length - 1 && y < copy[0].length - 1) {
          copy[x+1][y+1] = 2;
        }
        if(x > 0 && y < copy[0].length - 2) {
          copy[x-1][y+2] = 2;
        }
        this.setState({patterngrid: copy});
      }
      else if(this.state.pattern == 'diehard') {
        let copy = JSON.parse(JSON.stringify(this.state.squares));
        copy[x][y] = 2;
        if(y < copy[0].length - 1) {
          copy[x][y+1] = 2;
        }
        if(x < copy.length - 1 && y < copy[0].length - 1) {
          copy[x+1][y+1] = 2;
        }
        if(x > 0 && y < copy[0].length - 6) {
          copy[x-1][y+6] = 2;
        }
        if(x < copy.length - 1 && y < copy[0].length - 5) {
          copy[x+1][y+5] = 2;
        }
        if(x < copy.length - 1 && y < copy[0].length - 6) {
          copy[x+1][y+6] = 2;
        }
        if(x < copy.length - 1 && y < copy[0].length - 7) {
          copy[x+1][y+7] = 2;
        }
        this.setState({patterngrid: copy});
      }
      else if(this.state.pattern == 'acorn') {
        let copy = JSON.parse(JSON.stringify(this.state.squares));
        copy[x][y] = 2
        if(x > 1 && y < copy[0].length - 1) {
          copy[x-2][y+1] = 2;
        }
        if(y < copy[0].length - 1) {
          copy[x][y+1] = 2;
        }
        if(x > 0 && y < copy[0].length - 3) {
          copy[x-1][y+3] = 2;
        }
        if(y < copy[0].length - 4) {
          copy[x][y+4] = 2;
        }
        if(y < copy[0].length - 5) {
          copy[x][y+5] = 2;
        }
        if(y < copy[0].length - 6) {
          copy[x][y+6] = 2;
        }
        this.setState({patterngrid: copy});
      }
    }
  }

  handleClickNav(command) {
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
    if(command === 'randomize') {
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
    if(command === 'start') {
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
    if(command ===  'Slow') {
      this.setState({speed: 'Slow', delay: 1500});
    }
    if(command  === 'Normal') {
      this.setState({speed: 'Normal', delay: 750});
    }
    if(command === 'Fast') {
      this.setState({speed: 'Fast', delay: 100});
    }

    // setting the pattern
    if(this.state.start === 'Start Simulation!') {
      if(command === 'tri1' && this.state.start === 'Start Simulation!') {
        this.setState({pattern: 'tri1'});
      }
      else if(command === 'tri2' && this.state.start === 'Start Simulation!') {
        this.setState({pattern: 'tri2'});
      }
      else if(command === 'tri3' && this.state.start === 'Start Simulation!') {
        this.setState({pattern: 'tri3'});
      }
      else if(command === 'tri4' && this.state.start === 'Start Simulation!') {
        this.setState({pattern: 'tri4'});
      }
      else if(command === 'tet1' && this.state.start === 'Start Simulation!') {
        this.setState({pattern: 'tet1'});
      }
      else if(command === 'tet2' && this.state.start === 'Start Simulation!') {
        this.setState({pattern: 'tet2'});
      }
      else if(command === 'tet3' && this.state.start === 'Start Simulation!') {
        this.setState({pattern: 'tet3'});
      }
      else if(command === 'tet4' && this.state.start === 'Start Simulation!') {
        this.setState({pattern: 'tet4'});
      }
      else if(command === 'square' && this.state.start === 'Start Simulation!') {
        this.setState({pattern: 'square'});
      }
      else if(command === 'boat' && this.state.start === 'Start Simulation!') {
        this.setState({pattern: 'boat'});
      }
      else if(command === 'loaf' && this.state.start === 'Start Simulation!') {
        this.setState({pattern: 'loaf'});
      }
      else if(command === 'ship' && this.state.start === 'Start Simulation!') {
        this.setState({pattern: 'ship'});
      }
      else if(command === 'beehive' && this.state.start === 'Start Simulation!') {
        this.setState({pattern: 'beehive'});
      }
      else if(command === 'tub' && this.state.start === 'Start Simulation!') {
        this.setState({pattern: 'tub'});
      }
      else if(command === 'blinker' && this.state.start === 'Start Simulation!') {
        this.setState({pattern: 'blinker'});
      }
      else if(command === 'toad' && this.state.start === 'Start Simulation!') {
        this.setState({pattern: 'toad'});
      }
      else if(command === 'beacon' && this.state.start === 'Start Simulation!') {
        this.setState({pattern: 'beacon'});
      }
      else if(command === 'pulsar' && this.state.start === 'Start Simulation!') {
        this.setState({pattern: 'pulsar'});
      }
      else if(command === 'penta-decathlon' && this.state.start === 'Start Simulation!') {
        this.setState({pattern: 'penta-decathlon'});
      }
      else if(command === 'glider' && this.state.start === 'Start Simulation!') {
        this.setState({pattern: 'glider'});
      }
      else if(command === 'lwss' && this.state.start === 'Start Simulation!') {
        this.setState({pattern: 'lwss'});
      }
      else if(command === 'mwss' && this.state.start === 'Start Simulation!') {
        this.setState({pattern: 'mwss'});
      }
      else if(command === 'hwss' && this.state.start === 'Start Simulation!') {
        this.setState({pattern: 'hwss'});
      }
      else if(command === 'rpent' && this.state.start === 'Start Simulation!') {
        this.setState({pattern: 'rpent'});
      }
      else if(command === 'diehard' && this.state.start === 'Start Simulation!') {
        this.setState({pattern: 'diehard'});
      }
      else if(command === 'acorn' && this.state.start === 'Start Simulation!') {
        this.setState({pattern: 'acorn'});
      }
    }
    
  }
  
  startGame() {
    const loop = () => {
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

        if(this.state.variant === 'danger') {
          setTimeout(loop, this.state.delay);
        }
      }
    }
    setTimeout(loop, this.state.delay);
  }

  render() {
    return (
      <div>
        <NavigationBar 
          onClick={(command) => this.handleClickNav(command)}
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