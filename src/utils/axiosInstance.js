import axios from 'axios'; 

const axiosInstance = await axios.create({
 baseURL:"http://localhost:3300/"
});

export default axiosInstance