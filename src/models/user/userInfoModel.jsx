import React from 'react';
import PropTypes from 'prop-types';
/** @module models */

/**
 * UserInfo Class
 * 
 * @class
 */
class UserInfo extends React.Component {
  constructor(data) {
    super(data);
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.age = data.age;
  }

  /**
     *
     * @returns firstName
     */
  getFirstName() {
    return this.firstName;
  }

  /**
     *
     * @returns lastName
     */
  getLastName() {
    return this.lastName;
  }

  /**
     *
     * @returns (String) age
     */
  getAge() {
    return this.age;
  }

  /**
     *
     * @returns the complete name
     */
  getCompleteName() {
    return this.#formatString(`${this.getFirstName()} ${this.getLastName()}`);
  }

  /**
     * Return Capitalized String
     * @param {*} string
     * @returns Capitalized String
     */
  #formatString(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
UserInfo.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  age: PropTypes.number,
};
export default UserInfo;
