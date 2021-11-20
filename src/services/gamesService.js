import axios from "axios";



export default axios.create({
  baseURL: "https://free-to-play-games-database.p.rapidapi.com/api",
  headers: {
    'x-rapidapi-key': '6d65fcfef4msh17a794d7b7e75c4p1c4ce5jsnee5a688878e9'
  }
})




