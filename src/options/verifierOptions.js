import { VERIFIERS } from '../consts';

export const verifierOptions = [
  {
    id: VERIFIERS.MAVENNET,
    alt: 'Mavennet Verifier Logo',
    src: 'mavennet_verifier.png',
    url: 'https://api.neo-flow.com/verifier/credentials'
  },
  {
    id: VERIFIERS.TRANSMUTE,
    alt: 'Transmute Verifier Logo',
    src: 'transmute_verifier.png',
    url: 'https://vc.transmute.world/v0.1.0/verify/credentials'
  },
  {
    id: VERIFIERS.SECURE_KEY,
    alt: 'Secure Key Verifier Logo',
    src: 'secure_key.png',
    url: 'https://verifier.sandbox.trustbloc.dev/verifier/credentials'
  },
  {
    id: VERIFIERS.DANUBE_TECH,
    alt: 'Danube Tech Verifier Logo',
    src: 'danube_tech.png',
    url: 'https://univerifier.io/api/verifier/credentials'
  },
  {
    id: VERIFIERS.DIGITAL_BAZAAR,
    alt: 'Digital Bazaar Verifier Logo',
    src: 'digital_bazaar.png',
    url: 'https://verifier.interop.digitalbazaar.com/verifier/credentials'
  },
];