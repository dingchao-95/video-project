import axios from 'axios';

const KEY = "AIzaSyCKMLwKRr2N9c03IZ0hjEOrkyBmcDRjxS4";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});