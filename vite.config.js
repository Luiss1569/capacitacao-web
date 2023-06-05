import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import "dotenv/config";

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [react()],
    base: process.env.NODE_ENV === "production" ? "/capacitacao-web/" : "/",
    envDir: "./env",
  });
};
