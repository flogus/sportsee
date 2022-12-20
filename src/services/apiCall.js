import axios from 'axios'
const userUrl = `${process.env.REACT_APP_SERVER_URL}`;

/**
 *  @module api
 */
export default {
    /**
     * @method getUserDataApi()
     * @param {Integer} userId 
     * @returns response.data
     */
    getUserDataApi: async (userId) => {
        try {
            const response = await axios.get(userUrl+userId);
            return response.data
        } catch (error) {
            // return []
            console.error(error);
        }
    },
    /**
     * @method getPerfDataApi()
     * @param {Integer} userId 
     * @returns response.data
     */
    getPerfDataApi: async (userId) => {
        try {
            const response = await axios.get(userUrl+userId+'/performance');
            return response.data
        } catch (error) {
            console.error(error);
        }
    },
    /**
     * @method getActivityApi()
     * @param {Integer} userId 
     * @returns response.data
     */
    getActivityApi: async (userId) => {
        try {
            const response = await axios.get(userUrl+userId+'/activity');
            return response.data
        } catch (error) {
            console.error(error);
        }
    },
    /**
     * @method getAverageSessionsApi()
     * @param {Integer} userId 
     * @returns response.data
     */
    getAverageSessionsApi: async (userId) => {
        try {
            const response = await axios.get(userUrl+userId+'/average-sessions');
            return response.data
        } catch (error) {
            console.error(error);
        }
    }
}
