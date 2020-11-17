module.exports = {
    setupFilesAfterEnv: [
        // Configuration file executed before tests at runtime.
        '<rootDir>/src/config/setup-test.js'
    ],
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
    },
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/mocks.js",
        "\\.(css|less|scss)$": "<rootDir>/__mocks__/mocks.js"
    },
    coveragePathIgnorePatterns: [
        "/node_modules/",
        "config/setup-test.js"
    ],
    coverageReporters: [
        "json",
        "lcov",
        "text",
        "text-summary"
    ]
};
