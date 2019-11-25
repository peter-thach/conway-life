import React, {Component} from 'react';
import './styles/Legend.css';

class Legend extends Component {
  render() {
    return (
      <div id="legend-wrapper">
        <span id="text">
          <td id="alive"></td> Alive
        </span>
        <span id="text">
          <td id="dead"></td> Dead
        </span>
      </div>
    )
  }
}

export default Legend;