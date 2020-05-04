import { COMPANIES } from '../consts';

export const testSuit = [
  {
    issuer: COMPANIES.MAVENNET,
    verifier: COMPANIES.TRANSMUTE,
    wallet: COMPANIES.VERES_ONE,
    credential: 'Crude Product',
  },
  {
    issuer: COMPANIES.MAVENNET,
    verifier: COMPANIES.FACTOM,
    wallet: COMPANIES.VERES_ONE,
    credential: 'QP InBond',
  },
  {
    issuer: COMPANIES.TRANSMUTE,
    verifier: COMPANIES.MAVENNET,
    wallet: COMPANIES.VERES_ONE,
    credential: 'Crude Inspection',
  },
  {
    issuer: COMPANIES.FACTOM,
    verifier: COMPANIES.MAVENNET,
    wallet: COMPANIES.VERES_ONE,
    credential: 'Bill of Lading',
  },
];