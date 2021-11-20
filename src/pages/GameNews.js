import React from "react";
import { Grid } from "@mui/material";

import { NewCard } from "../components/Card/News";
import { DefaultPageSearch } from "../templates/DefaultPageSearch";
import { useGameList } from "../contexts/game-context";

export const GameNews = () => {
  const { state } = useGameList();
  const { news, words } = state;

  const filterTitle = (news) =>{
    return (words.len === 0 || !words)? true: news.title.includes(words)
  }

  return (
    <DefaultPageSearch>
      <Grid container spacing={2}>
        {news.length > 0 ? (
          news.filter(filterTitle).map((n) => (
            <Grid sm={6} md={4} lg={3} key={n.id} item>
              <NewCard
                id={n.id}
                title={n.title}
                description={n.short_description}
                thumb={n.thumbnail}
                articleUrl={n.article_url}
              />
            </Grid>
          ))
        ) : (
          <p> Não há noticias de jogos disponíveis</p>
        )}
      </Grid>
    </DefaultPageSearch>
  );
};
