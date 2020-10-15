import React from 'react';

class ChildSquare extends React.Component {
  constructor() {
    super();
    // Square's state that defined the checked value
    this.state = {
      squareClick: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
      },
    };
    this.handleSquareClick = this.handleSquareClick.bind(this);
  }

  // Square click handler
  handleSquareClick(no, event) {
    var squareClick = this.state.squareClick;
    squareClick[no] = !this.state.squareClick[no];
    this.setState({
      squareClick,
    });

    // Check if all the squares are checked
    var alltrue = Object.keys(squareClick).every((k) => {
      return squareClick[k];
    });

    if (alltrue) {
      this.props.handleMultiSelect();
    }

    // Prop for the square default status
    if (this.props.squareDefaultStatus) {
      this.props.handleMultiSelect();
    }
  }

  render() {
    const { squareClick } = this.state;
    const { squareDefaultStatus } = this.props;
    return (
      <div className="wrapper">
        <div className="square-wrapper">
          <div
            className={squareClick[1] ? 'active_square' : 'square'}
            checked={squareDefaultStatus ? squareDefaultStatus : squareClick[1]}
            onClick={(e) => {
              this.handleSquareClick(1, e.target.checked);
            }}
          />
          <div
            className={squareClick[2] ? 'active_square' : 'square'}
            checked={squareDefaultStatus ? squareDefaultStatus : squareClick[2]}
            onClick={(e) => {
              this.handleSquareClick(2, e.target.checked);
            }}
          />
        </div>

        <div
          className={squareClick[3] ? 'active_square' : 'square'}
          checked={squareDefaultStatus ? squareDefaultStatus : squareClick[3]}
          onClick={(e) => {
            this.handleSquareClick(3, e.target.checked);
          }}
        />

        <div className="square-wrapper">
          <div
            className={squareClick[4] ? 'active_square' : 'square'}
            checked={squareDefaultStatus ? squareDefaultStatus : squareClick[4]}
            onClick={(e) => {
              this.handleSquareClick(4, e.target.checked);
            }}
          />
          <div
            className={squareClick[5] ? 'active_square' : 'square'}
            checked={squareDefaultStatus ? squareDefaultStatus : squareClick[5]}
            onClick={(e) => {
              this.handleSquareClick(5, e.target.checked);
            }}
          />
        </div>
      </div>
    );
  }
}

export default ChildSquare;
