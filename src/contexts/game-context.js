import { createContext, useContext, useEffect, useReducer } from "react";

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
    const config1 = {
      method: "GET",
      headers: {
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        "x-rapidapi-key": "6d65fcfef4msh17a794d7b7e75c4p1c4ce5jsnee5a688878e9",
      },
    };
    
    const config2 = {
      method: "GET",
      headers: {
        "x-rapidapi-host": "mmo-games.p.rapidapi.com",
        "x-rapidapi-key": "3926a12f36mshf1347247fc53709p17ade4jsnededb7793d67",
      },
    };
    

    fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", config1)
      .then((response) => response.json())
      .then((games) => setState({ type: "SET_GAMES", content: games }))
      .catch(console.error);

      fetch("https://mmo-games.p.rapidapi.com/latestnews", config2)
      .then((response) => response.json())
      .then((games) => setState({ type: "SET_NEWS", content: games }))
      .catch(console.error);

  }, []);

  const fetchGameDetails = (id) => {
    if (!id) return;

    const config = {
      method: "GET",
      headers: {
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        "x-rapidapi-key": "6d65fcfef4msh17a794d7b7e75c4p1c4ce5jsnee5a688878e9",
      },
    };
    fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, config)
      .then((response) => response.json())
      .then((game) => setState({ type: "SET_GAME", content: game }));
  };

  const clearGame = () => {
    setState({ type: "SET_GAME", content: null });
  };

  const filterWord = (e) => {
    setState({ type: "SET_FILTER", content: e.target.value });
  };

  return <GameProvider value={{ state, fetchGameDetails, clearGame, filterWord }}>{children}</GameProvider>;
};
