import React from 'react';
import PropTypes from 'prop-types';
/** @module models */

/**
 * the Kind Class
 * 
 * @class Kind
 */
class Kind extends React.Component {
  constructor(data) {
    super(data);
    this.kind = Object.values(data);
  }

  getKind() {
    return this.kind;
  }
}

Kind.propTypes = {
  kind: PropTypes.string,
};
export default Kind;
