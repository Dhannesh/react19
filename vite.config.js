// import react, { reactCompilerPreset } from "@vitejs/plugin-react";
// import { defineConfig } from "vite";
// import tailwindcss from "@tailwindcss/vite";
// import babel from "@rolldown/plugin-babel";

// const ReactCompilerConfig = {};
// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     babel({
//       presets: [reactCompilerPreset()],
//     }),
//     react(),
//     tailwindcss(),
//   ],
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const ReactCompilerConfig = {};

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
      },
    }),
    tailwindcss(),
  ],
});
