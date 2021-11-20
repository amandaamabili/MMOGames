import { AppBar} from "@mui/material";
import React from "react";
import NavBar from "./NavBar";

export const Header = () => {
  return (
    <>
      <AppBar position="static">
        <NavBar/>
      </AppBar>
    </>
  );
};
