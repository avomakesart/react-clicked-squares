import React from 'react';

import ChildSquare from './ChildSquare.js';

class Squares extends React.Component {
  constructor() {
    super();
    this.state = {
      checkBoxDefaultStatus: false,
    };

    this.handleMultiSelect = this.handleMultiSelect.bind(this);
  }

  handleMultiSelect() {
    //console.log('aaaa')
    this.setState({
      checkBoxDefaultStatus: !this.state.checkBoxDefaultStatus,
    });
  }

  render() {
    //console.log('checkBoxDefaultStatus :', this.state.checkBoxDefaultStatus);

    return (
      <div className="container">
        <ChildSquare
          checkBoxDefaultStatus={this.state.checkBoxDefaultStatus}
          handleMultiSelect={() => {
            this.handleMultiSelect();
          }}
        />
        <div className="text_container">
          <h4>{this.state.checkBoxDefaultStatus ? 'Done!!!' : ''}</h4>
        </div>
      </div>
    );
  }
}

export default Squares;
