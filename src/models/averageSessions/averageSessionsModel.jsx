import React from 'react';
import PropTypes from 'prop-types';

class AverageSessions extends React.Component {
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

AverageSessions.propTypes = {
  userId: PropTypes.number,
  sessions: PropTypes.shape({
    day: PropTypes.number,
    sessionLength: PropTypes.number
  }),
};
export default AverageSessions;