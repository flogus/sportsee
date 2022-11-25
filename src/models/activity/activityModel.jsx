import React from 'react';
import PropTypes from 'prop-types';

class Activity extends React.Component {
  constructor(data) {
    super(data);
    this.userId = data.data.userId;
    this.sessions = data.data.sessions;
  }

  getUserId() {
    return this.userId;
  }

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
