import React from 'react'

export function selectPattern(x, y) {
    if(this.state.pattern) {
      if(this.state.patterntype === 'tri') {
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
          else if(this.state.pattern === 'tri2') {
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
          else { // 4
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
        }
        else if(this.state.patterntype === 'tet') {
          if(this.state.pattern === 'tet1') {
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
          else { // 4
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
        }
        else if(this.state.patterntype === 'still') {
          if(this.state.pattern === 'square') {
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
          else { // tub
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
        }
        else if(this.state.patterntype === 'osc') {
          if(this.state.pattern === 'pulsar') {
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
          else {
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
        }
        else if(this.state.patterntype === 'space') {
          if(this.state.pattern == 'glider') {
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
          else { //hwss 
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
        }
        else if(this.state.patterntype === 'methu') {
          if(this.state.pattern === 'rpent') {
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
          else if(this.state.pattern === 'diehard') {
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
          else { // acorn
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
    }

export function setPattern(command) {
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