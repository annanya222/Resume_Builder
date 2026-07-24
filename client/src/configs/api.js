import axios from 'axios' // this is basically a library which makes API calls to the backend. 
// It acts like a messenger between the frontend and the backend. It is used to make API calls to the backend. 
// It is a promise based library which makes it easy to handle asynchronous code. 

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL //This reads from your .env file. In your .env file you have : "http://localhost:3000" 
})

export default api