import React from 'react';

import ChildSquare from './ChildSquare.js';

class Squares extends React.Component {
  constructor() {
    super();
    this.state = {
      squareDefaultStatus: false,
    };

    // Prop for the multi select
    this.handleMultiSelect = this.handleMultiSelect.bind(this);
  }

  handleMultiSelect() {
    // State setter to the prop
    this.setState({
      squareDefaultStatus: !this.state.squareDefaultStatus,
    });
  }

  render() {
    // State destructuring
    const { squareDefaultStatus } = this.state;

    return (
      <div className="container">
        <ChildSquare
          squareDefaultStatus={squareDefaultStatus}
          handleMultiSelect={() => {
            this.handleMultiSelect();
          }}
        />
        <div className="text_container">
          <h4>{squareDefaultStatus ? 'Done!!!' : ''}</h4>
        </div>
      </div>
    );
  }
}

export default Squares;
