import React from "react";
import {Container} from "./styles"

export const CommentBody = ({ name, description  }) => {
  return (
    <Container>
      <span>{name}</span>
      <p>{description}</p>
</Container>
  );
};
