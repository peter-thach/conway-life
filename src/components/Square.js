import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: 'white',
    };
  }
  render() {
    const styles = {
      containerStyle: {
        backgroundColor: this.state.backgroundColor,
      }
    };
    const {containerStyle} = styles;
    return(
      <td
        style={containerStyle}
        className="square"
        // alternates between white and green on click 
        onClick={() => { this.state.backgroundColor === "lawngreen" ?
          this.setState({backgroundColor: 'white'}) :
          this.setState({backgroundColor: 'lawngreen'})}
        }
      >
        {this.state.value}
      </td>
    )
  }
}

export default Square;