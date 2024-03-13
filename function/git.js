import axios from 'axios';
export const fetchGit = async () => {
    try {
        // Send a GET request to the specified API endpoint
        const response = await axios.get(`${process.env.STRAPI_BASE_URL}/api/repo-stores`);

        // If the request is successful, return the data from the response
        return response.data.data;
    } catch (error) {
        // If an error occurs during the request, log the error and return an empty array
        console.log('Error fetching Git repositories:', error);
        return [];
    }
};