import axios from "axios";



export default axios.create({
  baseURL: "https://free-to-play-games-database.p.rapidapi.com/api",
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_FREE2PLAY_API_TOKEN  }
})




