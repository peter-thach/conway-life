import React from 'react';

function Square(props) {
  // Square changes color depending on state of squares array
  const styles = {
    containerStyle: {
      backgroundColor: props.value === 0 ? 'white' : (props.value === 2 ? 'gold' : 'lawngreen')
    }
  };
  const {containerStyle} = styles;
  return (
    <td
      className="square"
      style={containerStyle}
      onClick={props.onClick}
      onMouseOver={props.onMouseOver}
    >
    </td>
  )
}

export default Square;