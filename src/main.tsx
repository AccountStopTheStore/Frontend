import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { BrowserRouter } from "react-router-dom";
import { Global, ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { ThemeProvider as MUIThemeProvider, createTheme } from "@mui/material";
import globalStyles from "./assets/globalStyles.ts";
import { theme } from "./assets/theme.ts";
import { RecoilRoot } from "recoil";

const $root = document.getElementById("root") as HTMLElement;

const muiTheme = createTheme({
  ...theme,
  typography: {
    fontFamily: "Noto Sans KR",
  },
});

ReactDOM.createRoot($root).render(
  <MUIThemeProvider theme={muiTheme}>
    <EmotionThemeProvider theme={muiTheme}>
      <RecoilRoot>
        <BrowserRouter>
          <App />
          <Global styles={globalStyles} />
        </BrowserRouter>
      </RecoilRoot>
    </EmotionThemeProvider>
  </MUIThemeProvider>
);
