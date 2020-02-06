import React from 'react';
import { css } from '@emotion/core';
// First way to import
import { PacmanLoader } from 'react-spinners';
// Another way to import. This is recommended to reduce bundle size
// import ClipLoader from 'react-spinners/PacmanLoader';

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  render() {
    return (
      <div className="sweet-loading">
        <PacmanLoader
          css={override}
          size={50}
          //size={"150px"} this also works
          color={'#123abc'}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default Spinner;
