import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import { Home } from "./pages/Home";
import { GameList } from "./pages/GameList";
import GameDetails from "./pages/GameDetails";
import {GameNews} from "./pages/GameNews";

import { GameContex } from "./contexts/game-context";
import { color } from "@mui/system";

 const theme = createTheme({
  palette: {
    devinhouseColor: {
      main: "#FFF",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        h1 {
          margin: 0;
        }
      `,
    },
  },
});



const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GameContex>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<GameList />} />
            <Route path="/news" element={<GameNews />} />

            <Route path="/games/:gameId" element={<GameDetails />} />
          </Routes>
        </GameContex>
      </BrowserRouter>
      <CssBaseline />
    </ThemeProvider>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
