module.exports = {
    collectCoverage: false,
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
    resetMocks: true,
    restoreMocks: true,
    setupFilesAfterEnv: ['./test/setupTests.js'],
};
