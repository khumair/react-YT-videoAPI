import axios from 'axios';
const KEY = 'AIzaSyAhJB6Me4zzabQX050SlcW6vi6mZBoXK00';
export default axios.create({

    baseURL: https://www.googleapis.com/youtube/v3,
    params: {
        part: 'snippet',
        maxResults: 5,
        key = KEY
    }
});