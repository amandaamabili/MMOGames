import { createContext, useContext, useEffect, useReducer } from "react";
import gamesService from '../services/gamesService'
import newServices from "../services/newService"


const gameContext = createContext();
gameContext.displayName = "Game Context";

const GameProvider = gameContext.Provider;

export const useGameList = () => {
  const context = useContext(gameContext);
  if (!context) {
    throw new Error("Precisa usar useGameList dentro do contexto GameContext");
  }

  return context;
};

const initial_state = {
  games: [],
  news: [],
  game: null,
  words: "",
};

const reducer = (state, valueFromSetter) => {
  switch (valueFromSetter.type) {
    case "SET_GAMES":
      return { ...state, games: valueFromSetter.content };
    case "SET_GAME":
      return { ...state, game: valueFromSetter.content };
    case "SET_NEWS":
      return { ...state, news: valueFromSetter.content };
    case "SET_FILTER":
      return { ...state, words: valueFromSetter.content };
    default:
      return state;
  }
};

export const GameContex = ({ children }) => {
  const [state, setState] = useReducer(reducer, initial_state);

  useEffect(() => {




    gamesService.get("/games")
      .then(response => {
        setState({ type: "SET_GAMES", content: response.data })
      })
      .catch(console.error);


    newServices.get("/latestnews")
      .then(response => {
        setState({ type: "SET_NEWS", content: response.data })
      })
      .catch(console.error);



  }, []);

  const fetchGameDetails = (id) => {
    if (!id) return;

   


      gamesService.get(`/game?id=${id}`)
      .then(response => {
        setState({ type: "SET_GAME", content: response.data })
      })
      .catch(console.error);
  };

  const clearGame = () => {
    setState({ type: "SET_GAME", content: null });
  };

  const filterWord = (e) => {
    setState({ type: "SET_FILTER", content: e.target.value });
  };

  return <GameProvider value={{ state, fetchGameDetails, clearGame, filterWord }}>{children}</GameProvider>;
};
