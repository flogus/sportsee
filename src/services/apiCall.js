import axios from 'axios'
const userUrl = `${process.env.REACT_APP_SERVER_URL}`;

export default {
    getUserData: async (userId) => {
        try {
            const response = await axios.get(userUrl+userId);
            return response.data
        } catch (error) {
            console.error(error);
        }
    },
    getPerfData: async (userId) => {
        try {
            const response = await axios.get(userUrl+userId+'/performance');
            return response.data
        } catch (error) {
            console.error(error);
        }
    },
    getActivity: async (userId) => {
        try {
            const response = await axios.get(userUrl+userId+'/activity');
            return response.data
        } catch (error) {
            console.error(error);
        }
    },
    getAverageSessions: async (userId) => {
        try {
            const response = await axios.get(userUrl+userId+'/average-sessions');
            return response.data
        } catch (error) {
            console.error(error);
        }
    }
}
