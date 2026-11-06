import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    "import.meta.env.VITE_BUILD_YEAR": JSON.stringify(
      new Intl.DateTimeFormat("pt-BR", {
        year: "numeric",
        timeZone: "America/Sao_Paulo",
      }).format(new Date()),
    ),
  },
  build: { assetsInlineLimit: 0 },
});
