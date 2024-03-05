import axios from "axios";

export const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${process.env.STRAPI_BASE_URL}/api/achievement-stores/`);
      return response.data.data
    } catch (error) {
      console.log('error', error);
      return [];
  
    }
  }