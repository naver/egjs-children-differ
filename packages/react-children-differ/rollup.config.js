const buildHelper = require("@egjs/build-helper");

const defaultOptions = {
  input: "./src/react-children-differ/index.ts",
  sourcemap: true,
  tsconfig: "tsconfig.build.json",
};
export default buildHelper([
  {
    ...defaultOptions,
    format: "es",
    output: "./dist/children-differ.esm.js",
  },
  {
    ...defaultOptions,
    format: "cjs",
    output: "./dist/children-differ.cjs.js",
  },
]);
