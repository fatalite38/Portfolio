import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { App } from "./App";
import "../styles.css";
import "../upgrade.css";

const root = document.getElementById("root");
if (!root) throw new Error("Elemento raiz não encontrado.");
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);
if (root.querySelector("main")) hydrateRoot(root, app);
else createRoot(root).render(app);
