import React from 'react';
import PropTypes from 'prop-types';
import Kind from './kindModel';

class Performance extends React.Component {
  constructor(data) {
    super(data);
    this.userId = data.data.userId;
    this.kind = new Kind(data.data.kind);
    this.data = data.data.data;
  }

  getUserId() {
    return this.userId;
  }

  getKind() {
    return this.kind;
  }

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
