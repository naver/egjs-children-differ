const buildHelper = require("@egjs/build-helper");
const VuePlugin = require("rollup-plugin-vue");


const defaultOptions = {
  input: "./src/ChildrenDiffer.ts",
  sourcemap: true,
  plugins: [VuePlugin],
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
