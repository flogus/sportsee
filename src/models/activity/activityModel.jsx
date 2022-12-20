import React from 'react';
import PropTypes from 'prop-types';
/** @module models */

/**
 * the Activity Class
 * 
 * @class Activity
 */
class Activity extends React.Component {
  /**
   * @method constructor
   * @param {*} data all the activity data
   */
  constructor(data) {
    super(data);
    this.userId = data.data.userId;
    this.sessions = data.data.sessions;
  }
  /**
   * @method getUserId
   * @returns {Integer} the user id
   */
  getUserId() {
    return this.userId;
  }

    /**
   * @method getSessions
   * @returns {Integer} the sessions data
   */
  getSessions() {
    return this.sessions;
  }
}

Activity.propTypes = {
  userId: PropTypes.string,
  sessions: PropTypes.shape({
    day: PropTypes.string,
    kilogram: PropTypes.number,
    calories: PropTypes.number
  }),
};
export default Activity;
