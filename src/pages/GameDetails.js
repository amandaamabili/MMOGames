import { Button, Chip, CircularProgress, Divider, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useGameList } from "../contexts/game-context";
import { DefaultPage } from "../templates/DefaultPage";
import { ScreenShoot } from "../components/Screenshoot";
import { CommentList } from "../components/Comment/CommentList";
import { styled } from '@mui/styles';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #B85252 30%, #F58840 90%)',
  border: 0,
  borderRadius: 50,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: '#EADEDE',
  height: 48,
  width: '20%',
  padding: '0 30px',
 
});

const GameDetails = () => {
  const navigate = useNavigate();
  const { gameId } = useParams();

  const { state, fetchGameDetails, clearGame } = useGameList();
  const { game } = state;

  useEffect(() => {
    fetchGameDetails(gameId);
    return () => {
      clearGame();
    };
  }, [gameId]);

  return (
    <DefaultPage>
      <Paper>
        <Grid container>
          {!game ? (
            <CircularProgress />
          ) : (
            <>
              <Grid item md={4}>
                <img src={game.thumbnail} alt={game.title} />
              </Grid>
              <Grid item md={8}>
                <p>
                  <Typography variant="h5">{game.title}</Typography>
                </p>
                <p>
                  <Typography variant="subtitle1">{game.short_description}</Typography>
                </p>
                <Divider />
                <p>
                  <Typography variant="body1">{game.description}</Typography>
                </p>
                <Divider />
                <p>
                  <Chip label={game.genre} variant="outlined" />
                </p>
              </Grid>
              <Carousel showArrows={true}>
                {game.screenshots.map( sc => <ScreenShoot url={sc.image}/>)}
              </Carousel>
  
            </>
          )}
        </Grid>
        <div>
            <CommentList gameId={gameId}/>
        </div>
        <div>
                <MyButton variant="contained" onClick={() => navigate("/games")}>
                  VOLTAR
                </MyButton>
              </div>
      </Paper>
    </DefaultPage>
  );
};

export default GameDetails;
