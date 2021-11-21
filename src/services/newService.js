import axios from "axios";



export default axios.create({
    baseURL: "https://mmo-games.p.rapidapi.com",
    headers: {
        'x-rapidapi-key': process.env.REACT_APP_MMO_API_TOKEN    }
})
