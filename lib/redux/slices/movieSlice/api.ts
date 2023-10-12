import axios from "axios";

const URL = 'https://api.tvmaze.com/shows';

export const fetchALlMovie = async () => {
    try {
        let response = await axios.get(URL);
        console.log("Movie list - ", response.data.slice(0,50));
        return response.data.slice(0,20);
    } catch (e) {
        console.log("error - ", e);
        return [];
    }
}

