import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { BrowserRouter } from "react-router-dom";

const $root = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot($root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
