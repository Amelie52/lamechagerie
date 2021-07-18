module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js"],
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  moduleDirectories: ["node_modules"],
  testEnvironment: "jsdom",
};
