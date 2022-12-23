import React from 'react';
import PropTypes from 'prop-types';
import Kind from './kindModel';
/** @module models */

/**
 * the Performance Class
 * 
 * @class Performance
 */
class Performance extends React.Component {
  constructor(data) {
    super(data);
    this.userId = data.data.userId;
    this.kind = new Kind(data.data.kind);
    this.data = data.data.data;
  }

  /**
   * @method getUserId
   * @returns {Number}
   */
  getUserId() {
    return this.userId;
  }

    /**
   * @method getKind
   * @returns {String}
   */
  getKind() {
    return this.kind;
  }

    /**
   * @method getData
   * @returns {Object}
   */
  getData() {
    return this.data;
  }
}

Performance.propTypes = {
  userId: PropTypes.number,
  kind: PropTypes.instanceOf(Kind),
  data: PropTypes.shape({
    value: PropTypes.number,
    kind: PropTypes.number
  }),
};
export default Performance;
