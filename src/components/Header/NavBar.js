
import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
} from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import { Link } from "react-router-dom";


const NavBar = styled(AppBar)({
  background: 'linear-gradient(45deg, #B85252 30%, #F58840 90%)',
  border: 0,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: '#EADEDE',
  height: '70px',
  width: '100%',
  padding: '0 30px',
 
});

const useStyles = makeStyles(() => ({

  navlinks: {
    marginLeft: 10,
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "#EADEDE",
    fontSize: "20px",
    marginLeft: 20,
    "&:hover": {
      color: "#B85252",
      transition:  "filter 0.9s",
      filter: "brightness(0.8)",
      
  
     
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <NavBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
        DevInMMO
        </Typography>
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/games" className={classes.link}>
              Games
            </Link>
            <Link to="/news" className={classes.link}>
              News
            </Link>
          </div>
      </Toolbar>
    </NavBar>
  );
}
export default Navbar;