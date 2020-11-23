import nodeResolve from "rollup-plugin-node-resolve"
import typescript from "rollup-plugin-typescript2"

export default {
  input: "src/Scripts/main.ts",
  output: {
    file: "change-case.novaextension/Scripts/main.dist.js",
    format: "cjs",
    sourcemap: true,
  },
  plugins: [
    nodeResolve(),
    typescript({
      tsconfigOverride: {
        compilerOptions: { module: "esnext" },
      },
    }),
  ],
}
