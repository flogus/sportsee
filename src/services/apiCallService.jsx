import React, { useState, useEffect, useLocation } from 'react';
import axios from 'axios';

function ApiCallService(props) {
  const currentId = 12;
  const userUrl = `http://localhost:3000/user/${currentId}`;

  // function getUserName(){
  // User basis data
  // const [firstName, getFirstName] = useState('')
  // const [lastName, getLastName] = useState('')
  // }

  // function getUserData(){
  //     axios.get(userUrl)
  //     .then((response) => {
  //         const firstName = response.data.data.userInfos.firstName
  //         const lastName = response.data.data.userInfos.lastName
  //         const calorieCount = response.data.data.keyData.calorieCount
  //         const proteinCount = response.data.data.keyData.proteinCount
  //         const carbohydrateCount = response.data.data.keyData.carbohydrateCount
  //         const lipidCount = response.data.data.keyData.lipidCount
  //     })
  //     .catch(error => console.error(`error: ${error}`))
  // }
}
export default ApiCallService;
