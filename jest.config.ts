import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    // Adjust paths for your project structure
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Transpile TypeScript files
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json', // Specify the tsconfig file
    },
  },
};

export default config;