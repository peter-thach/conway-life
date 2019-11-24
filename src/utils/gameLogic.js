import React from 'react'

export function gameLogic() {
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