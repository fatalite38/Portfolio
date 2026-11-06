import { readFile, writeFile, rm } from "node:fs/promises";
import { render } from "../.prerender/entry-server.js";

const entry = new URL("../dist/index.html", import.meta.url);
const html = await readFile(entry, "utf8");
if (!html.includes("<!--app-html-->"))
  throw new Error("Marcador de pré-renderização ausente.");
await writeFile(entry, html.replace("<!--app-html-->", () => render()));
await rm(new URL("../.prerender/", import.meta.url), {
  recursive: true,
  force: true,
});
console.log(
  "HTML pré-renderizado: conteúdo e links disponíveis antes de carregar o JavaScript.",
);
