import { COMPANIES } from '../consts';

export const testSuit = [
  {
    issuer: COMPANIES.MAVENNET,
    verifier: COMPANIES.DIGITAL_BAZAAR,
    wallet: COMPANIES.TRANSMUTE,
    credential: 'Permanent Resident Card',
  },
  {
    issuer: COMPANIES.MAVENNET,
    verifier: COMPANIES.DANUBE_TECH,
    wallet: COMPANIES.TRANSMUTE,
    credential: 'Permanent Resident Card',
  },
  {
    issuer: COMPANIES.MAVENNET,
    verifier: COMPANIES.SECURE_KEY,
    wallet: COMPANIES.TRANSMUTE,
    credential: 'Permanent Resident Card',
  },
  {
    issuer: COMPANIES.MAVENNET,
    verifier: COMPANIES.SICPA,
    wallet: COMPANIES.TRANSMUTE,
    credential: 'Permanent Resident Card',
  },
  {
    issuer: COMPANIES.DIGITAL_BAZAAR,
    verifier: COMPANIES.MAVENNET,
    wallet: COMPANIES.SECURE_KEY,
    credential: 'Permanent Resident Card',
  },
  {
    issuer: COMPANIES.DANUBE_TECH,
    verifier: COMPANIES.MAVENNET,
    wallet: COMPANIES.SECURE_KEY,
    credential: 'Permanent Resident Card',
  },
  {
    issuer: COMPANIES.SECURE_KEY,
    verifier: COMPANIES.MAVENNET,
    wallet: COMPANIES.SECURE_KEY,
    credential: 'Permanent Resident Card',
  },
  {
    issuer: COMPANIES.SICPA,
    verifier: COMPANIES.MAVENNET,
    wallet: COMPANIES.SECURE_KEY,
    credential: 'Permanent Resident Card',
  },
];