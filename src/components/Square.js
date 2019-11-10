import React from 'react';

function Square(props) {
  // Square changes color depending on state of squares array
  const styles = {
    containerStyle: {
      backgroundColor: props.value === 0 ? 'white' : 'lawngreen'
    }
  };
  const {containerStyle} = styles;
  return (
    <td
      className="square"
      style={containerStyle}
      onClick={props.onClick}
    >
    </td>
  )
}

export default Square;