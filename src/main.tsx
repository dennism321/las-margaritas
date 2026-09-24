import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

declare global {
  interface Window {
    __lmReady?: boolean;
  }
}

const root = document.getElementById("root")!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// The production build pre-renders the page into #root; attach to that HTML
// instead of rebuilding it. The dev server serves an empty #root.
if (root.firstElementChild) hydrateRoot(root, app);
else createRoot(root).render(app);

window.__lmReady = true;
