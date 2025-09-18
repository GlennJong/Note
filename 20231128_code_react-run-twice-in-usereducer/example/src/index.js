import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App, App2 } from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// 會跑 2 次
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// 只跑 1 次
root.render(
  <App />
);

// 只跑 1 次
root.render(
  <App2 />
);