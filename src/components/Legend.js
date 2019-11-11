import React, {Component} from 'react';
import './styles/Legend.css';

class Legend extends Component {
  render() {
    return (
      <div id="legend-wrapper">
        <div id="text">
          <td id="alive"></td> Alive
        </div>
        <div id="text">
          <td id="dead"></td> Dead
        </div>
      </div>
    )
  }
}

export default Legend;