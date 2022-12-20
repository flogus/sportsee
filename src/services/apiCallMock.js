import axios from 'axios'
const userUrl = `${process.env.REACT_APP_SERVER_URL}`;

export default {
    getUserDataApi: async (userId) => {
        try {
            const response = {"data":{"id":18,"userInfos":{"firstName":"Florian","lastName":"Guschlbauer","age":34},"score":0.3,"keyData":{"calorieCount":2500,"proteinCount":90,"carbohydrateCount":150,"lipidCount":120}}}
            return response.data
        } catch (error) {
            return []
        }
    },
    getPerfDataApi: async (userId) => {
        try {
            const response = await axios.get(userUrl+userId+'/performance');
            return response.data
        } catch (error) {
            console.error(error);
        }
    },
    getActivityApi: async (userId) => {
        try {
            const response = await axios.get(userUrl+userId+'/activity');
            return response.data
        } catch (error) {
            console.error(error);
        }
    },
    getAverageSessionsApi: async (userId) => {
        try {
            const response = await axios.get(userUrl+userId+'/average-sessions');
            return response.data
        } catch (error) {
            console.error(error);
        }
    }
}
