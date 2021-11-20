import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Header } from "../components/Header";
import {  TextField, IconButton } from '@mui/material';
import { useGameList } from "../contexts/game-context";


import { SearchOutlined } from '@material-ui/icons';

export const DefaultPageSearch = ({ children }) => {

  const {filterWord} = useGameList()

  return (
    <>
      <Header />
      <TextField
                fullWidth
                id="standard-bare"
                variant="outlined"
                defaultValue=""
                onChange= {filterWord}
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <SearchOutlined />
                    </IconButton>
                  ),
                }}
              />
      <Box marginTop={2}>
        <Container>{children}</Container>
      </Box>
    </>
  );
};
