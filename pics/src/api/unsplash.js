import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID sxncFH13GpODg0YkUXHAATEoF98m2lQOTDtSJe69N04',
    },
});