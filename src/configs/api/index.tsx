import axios from "axios";

export const api = axios.create({
    baseURL: 'https://ua-to-do-list-server.onrender.com/'
});


