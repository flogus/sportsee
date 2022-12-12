import React from 'react';
import PropTypes from 'prop-types';
import UserInfo from './userInfoModel';
import KeyData from './keyDataModel';

class User extends React.Component {
  constructor(data) {
    super(data);
    console.log('User',data)
    this.id = data.data.id;
    this.userInfos = new UserInfo(data.data.userInfos);
    this.todayScore = data.data.todayScore;
    this.keyData = new KeyData(data.data.keyData);
  }

  /**
     *
     * @returns id
     */
  getId() {
    return this.id;
  }

  /**
     *
     * @returns userInfos
     */
  getUserInfos() {
    return this.userInfos;
  }

  /**
     *
     * @returns todayScore
     */
  getTodayScore() {
    return this.todayScore;
  }

  /**
     *
     * @returns keyData
     */
  getKeyData() {
    return this.keyData;
  }
}
User.propTypes = {
  id: PropTypes.number,
  userInfos: PropTypes.instanceOf(UserInfo),
  todayScore: PropTypes.number,
  keyData: PropTypes.instanceOf(KeyData),
};
export default User;
