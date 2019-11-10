import React from 'react';

class Square extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     backgroundColor: 'white',
  //     value: 0,
  //   };
  // }

  render() {
    const styles = {
      containerStyle: {
        backgroundColor: this.state.value === 0 ? 'white' : 'lawngreen'
      }
    };
    const {containerStyle} = styles;
    return(
      <td
        style={containerStyle}
        className="square"
        // alternates between white and green on click 
        onClick={() => { this.props.onClick() }}
      >
      </td>
    )
  }
}

export default Square;