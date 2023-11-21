import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { BrowserRouter } from "react-router-dom";
import { Global, ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { ThemeProvider as MUIThemeProvider, createTheme } from "@mui/material";
import globalStyles from "./assets/globalStyles.ts";
import { theme } from "./assets/theme.ts";
import { RecoilRoot } from "recoil";
import { GoogleOAuthProvider } from "@react-oauth/google";

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
          <GoogleOAuthProvider
            clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}
            onScriptLoadError={() => console.log("실패")}
            onScriptLoadSuccess={() => console.log("성공")}
          >
            <App />
            <Global styles={globalStyles} />
          </GoogleOAuthProvider>
        </BrowserRouter>
      </RecoilRoot>
    </EmotionThemeProvider>
  </MUIThemeProvider>
);
