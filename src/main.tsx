import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { BrowserRouter } from "react-router-dom";
import { Global, ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { ThemeProvider as MUIThemeProvider, createTheme } from "@mui/material";
import globalStyles from "./assets/globalStyles.ts";
import { theme } from "./assets/theme.ts";

const $root = document.getElementById("root") as HTMLElement;

const muiTheme = createTheme({
  ...theme,
  typography: {
    fontFamily: "Noto Sans KR",
  },
});

console.log(muiTheme);

ReactDOM.createRoot($root).render(
  <MUIThemeProvider theme={muiTheme}>
    <EmotionThemeProvider theme={muiTheme}>
      <BrowserRouter>
        <App />
        <Global styles={globalStyles} />
      </BrowserRouter>
    </EmotionThemeProvider>
  </MUIThemeProvider>
);
