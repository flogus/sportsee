import React from 'react';
import PropTypes from 'prop-types';

/**
 * Keydata classs
 * @class
 */
class KeyData extends React.Component {
  constructor(data) {
    super(data);
    this.calories = data.calorieCount;
    this.proteins = data.proteinCount;
    this.carbohydrates = data.carbohydrateCount;
    this.lipids = data.lipidCount;
  }

  /**
     *
     * @returns calories
     */
  getCalories() {
    return this.calories;
  }

  /**
     *
     * @returns proteins
     */
  getProteins() {
    return this.proteins;
  }

  /**
     *
     * @returns carbohydrates
     */
  getCarbohydrates() {
    return this.carbohydrates;
  }

  /**
     *
     * @returns lipids
     */
  getLipids() {
    return this.lipids;
  }
}
KeyData.propTypes = {
  calories: PropTypes.number,
  proteins: PropTypes.number,
  carbohydrates: PropTypes.number,
  lipids: PropTypes.number,
};
export default KeyData;
