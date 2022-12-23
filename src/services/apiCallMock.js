import axios from 'axios'
const userUrl = `${process.env.REACT_APP_SERVER_URL}`;
/** @module services.apimock */

export default {
    /**
     * @method getUserDataApi
     * @param {Integer} userId the user id
     * @returns response.data
     */
    getUserDataApi: async (userId) => {
        try {
            const response = {
                "data": {
                    "data": {
                        "id": 18,
                        "userInfos": {
                            "firstName": "Kilian",
                            "lastName": "Mbappe",
                            "age": 24
                        },
                        "score": 0.99,
                        "keyData": {
                            "calorieCount": 1000,
                            "proteinCount": 1000,
                            "carbohydrateCount": 1000,
                            "lipidCount": 1000
                        }
                    }
                }
            }
            return response.data
        } catch (error) {
            return []
        }
    },
    /**
     * @method getPerfDataApi
     * @param {Integer} userId the user id
     * @returns response.data
     */
    getPerfDataApi: async (userId) => {
        try {
            const response = {
                "data": {
                    "data": {
                        "userId": 12,
                        "kind": {
                            "1": "cardio",
                            "2": "energy",
                            "3": "endurance",
                            "4": "strength",
                            "5": "speed",
                            "6": "intensity"
                        },
                        "data": [
                            {
                                "value": 100,
                                "kind": 1
                            },
                            {
                                "value": 50,
                                "kind": 2
                            },
                            {
                                "value": 100,
                                "kind": 3
                            },
                            {
                                "value": 50,
                                "kind": 4
                            },
                            {
                                "value": 100,
                                "kind": 5
                            },
                            {
                                "value": 50,
                                "kind": 6
                            }
                        ]
                    }
                }
            }
            return response.data
        } catch (error) {
            return []
        }
    },
    /**
     * @method getActivityApi
     * @param {Integer} userId the user id
     * @returns response.data
     */
    getActivityApi: async (userId) => {
        try {
            const response = {
                "data": {
                    "data": {
                        "userId": 12,
                        "sessions": [
                            {
                                "day": "2020-07-01",
                                "kilogram": 50,
                                "calories": 100
                            },
                            {
                                "day": "2020-07-02",
                                "kilogram": 60,
                                "calories": 100
                            },
                            {
                                "day": "2020-07-03",
                                "kilogram": 70,
                                "calories": 100
                            },
                            {
                                "day": "2020-07-04",
                                "kilogram": 80,
                                "calories": 100
                            },
                            {
                                "day": "2020-07-05",
                                "kilogram": 90,
                                "calories": 100
                            },
                            {
                                "day": "2020-07-06",
                                "kilogram": 100,
                                "calories": 100
                            },
                            {
                                "day": "2020-07-07",
                                "kilogram": 110,
                                "calories": 100
                            }
                        ]
                    }
                }
            }
            return response.data
        } catch (error) {
            return []
        }
    },
    /**
     * @method getAverageSessionsApi
     * @param {Integer} userId the user id
     * @returns response.data
     */
    getAverageSessionsApi: async (userId) => {
        try {
            // const response = await axios.get(userUrl+userId+'/average-sessions');
            const response = {
                "data": {
                    "data": {
                        "userId": 12,
                        "sessions": [
                            {
                                "day": 1,
                                "sessionLength": 30
                            },
                            {
                                "day": 2,
                                "sessionLength": 10
                            },
                            {
                                "day": 3,
                                "sessionLength": 30
                            },
                            {
                                "day": 4,
                                "sessionLength": 10
                            },
                            {
                                "day": 5,
                                "sessionLength": 30
                            },
                            {
                                "day": 6,
                                "sessionLength": 10
                            },
                            {
                                "day": 7,
                                "sessionLength": 30
                            }
                        ]
                    }
                }
            }
            return response.data
        } catch (error) {
            return []
        }
    }
}
