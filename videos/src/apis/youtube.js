import axios from 'axios';

const KEY = 'AIzaSyDpgN1BxSzAharHPgMrwOsn2Mgb4h59Uak';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        type: 'video',
        maxResult: 5,
        key: KEY,
    }
});
