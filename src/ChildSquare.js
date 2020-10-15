import React from 'react';

class ChildSquare extends React.Component {
  constructor() {
    super();
    this.state = {
      squareClick: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
      },
    };
    this.handleCheckBoxClick = this.handleCheckBoxClick.bind(this);
  }

  handleCheckBoxClick(no, event) {
    var squareClick = this.state.squareClick;
    squareClick[no] = !this.state.squareClick[no];
    this.setState({
      squareClick,
    });

    var alltrue = Object.keys(squareClick).every((k) => {
      return squareClick[k];
    });
    if (alltrue) {
      this.props.handleMultiSelect();
    }

    if (this.props.checkBoxDefaultStatus) {
      this.props.handleMultiSelect();
    }
  }

  render() {
    const { squareClick } = this.state;
    const { checkBoxDefaultStatus } = this.props;
    return (
      <div className="wrapper">
        <div className="square-wrapper">
          <div
            className={squareClick[1] ? 'active_square' : 'square'}
            checked={
              checkBoxDefaultStatus ? checkBoxDefaultStatus : squareClick[1]
            }
            onClick={(e) => {
              this.handleCheckBoxClick(1, e.target.checked);
            }}
          />
          <div
            className={squareClick[2] ? 'active_square' : 'square'}
            checked={
              checkBoxDefaultStatus ? checkBoxDefaultStatus : squareClick[2]
            }
            onClick={(e) => {
              this.handleCheckBoxClick(2, e.target.checked);
            }}
          />
        </div>

        <div
          className={squareClick[3] ? 'active_square' : 'square'}
          checked={
            checkBoxDefaultStatus ? checkBoxDefaultStatus : squareClick[3]
          }
          onClick={(e) => {
            this.handleCheckBoxClick(3, e.target.checked);
          }}
        />

        <div className="square-wrapper">
          <div
            className={squareClick[4] ? 'active_square' : 'square'}
            checked={
              checkBoxDefaultStatus ? checkBoxDefaultStatus : squareClick[4]
            }
            onClick={(e) => {
              this.handleCheckBoxClick(4, e.target.checked);
            }}
          />
          <div
            className={squareClick[5] ? 'active_square' : 'square'}
            checked={
              checkBoxDefaultStatus ? checkBoxDefaultStatus : squareClick[5]
            }
            onClick={(e) => {
              this.handleCheckBoxClick(5, e.target.checked);
            }}
          />
        </div>
      </div>
    );
  }
}

export default ChildSquare;
