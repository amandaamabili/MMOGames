import { CardHeader, Card, CardMedia, CardContent, Typography, CardActions } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

export const GameCard = ({ id, title, genre, description, thumb }) => {
  const navigate = useNavigate();
  return (
    <Card>
      <CardHeader title={title} subheader={genre} />
      <CardMedia component="img" height="194" image={thumb} alt={title} onClick={() => navigate(`/games/${id}`)} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing></CardActions>
    </Card>
  );
};
