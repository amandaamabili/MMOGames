import axios from "axios";



export default axios.create({
    baseURL: "https://mmo-games.p.rapidapi.com",
    headers: {
        'x-rapidapi-key': '3926a12f36mshf1347247fc53709p17ade4jsnededb7793d67'
    }
})
