import { COMPANIES } from '../consts';

export const testSuit = [
  {
    issuer: COMPANIES.MAVENNET,
    verifier: COMPANIES.MAVENNET
  },
  {
    issuer: COMPANIES.MAVENNET,
    verifier: COMPANIES.TRANSMUTE
  },
  {
    issuer: COMPANIES.MAVENNET,
    verifier: COMPANIES.FACTOM
  },
  {
    issuer: COMPANIES.TRANSMUTE,
    verifier: COMPANIES.MAVENNET
  },
  {
    issuer: COMPANIES.FACTOM,
    verifier: COMPANIES.MAVENNET
  },
];