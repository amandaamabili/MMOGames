import React  from "react";
import { Grid } from "@mui/material";

import { GameCard } from "../components/Card/Game";
import { DefaultPageSearch } from "../templates/DefaultPageSearch";
import { useGameList } from "../contexts/game-context";

export const GameList = () => {
  const { state } = useGameList();
  const { games, words } = state;

  const filterNews = (game) =>{
    return (words.len === 0 || !words)? true: game.title.includes(words)
  }

  return (
    <DefaultPageSearch>
      <Grid container spacing={2}>
        {games.length > 0 ? (
          games.filter(filterNews).map((game) => (
            <Grid sm={6} md={4} lg={3} key={game.id} item>
              <GameCard
                id={game.id}
                title={game.title}
                genre={game.genre}
                description={game.short_description}
                thumb={game.thumbnail}
              />
            </Grid>
          ))
        ) : (
          <p> Não há card de jogo disponível</p>
        )}
      </Grid>
    </DefaultPageSearch>
  );
};
