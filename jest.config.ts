import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  displayName: 'client',
  preset: 'ts-jest',
  transformIgnorePatterns: ['\\.(css|scss|sass)$'],
  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy',
  },
  extensionsToTreatAsEsm: ['.ts'],
};

export default config;