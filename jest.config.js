/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
  reporters: [
    "default",
    [
      "jest-junit",
      { outputDirectory: "./test-results", outputName: "results.xml" },
    ],
    [
      "jest-html-reporters",
      {
        publicPath: "./test-report",
        filename: "report.html",
        expand: true,
      },
    ],
  ],
};
