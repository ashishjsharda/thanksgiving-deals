import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const dealsService = {
    async getOnlineDeals() {
        const response = await axios.get(`${API_BASE_URL}/deals/online`);
        return response.data;
    },

    async getLocalDeals(zipCode) {
        const response = await axios.get(`${API_BASE_URL}/deals/local/${zipCode}`);
        return response.data;
    },
};
