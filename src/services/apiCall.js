import axios from 'axios'
const userUrl = `${process.env.REACT_APP_SERVER_URL}`;
/** @module services.api */

export default {
    /**
     * @method getUserDataApi
     * @param {Integer} userId the user id
     * @returns response.data
     */
    getUserDataApi: async (userId) => {
        try {
            const response = await axios.get(userUrl+userId);
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
            const response = await axios.get(userUrl+userId+'/performance');
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
            const response = await axios.get(userUrl+userId+'/activity');
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
            const response = await axios.get(userUrl+userId+'/average-sessions');
            return response.data
        } catch (error) {
            return []
        }
    }
}
