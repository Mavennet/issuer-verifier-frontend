import { COMPANIES } from '../consts';

export const verifierOptions = [
  {
    id: COMPANIES.MAVENNET,
    alt: 'Mavennet Verifier Logo',
    src: 'mavennet.png',
    credential_url: 'https://api.neo-flow.com/verifier/credentials',
    presentation_url: 'https://api.neo-flow.com/verifier/presentations'
  },
  {
    id: COMPANIES.TRANSMUTE,
    alt: 'Transmute Verifier Logo',
    src: 'transmute.png',
    credential_url: 'https://vc.transmute.world/v0.1.0/verify/credentials',
    presentation_url: 'https://vc.transmute.world/v0.1.0/verify/presentations'
  },
  {
    id: COMPANIES.SECURE_KEY,
    alt: 'Secure Key Verifier Logo',
    src: 'secure_key.png',
    credential_url: 'https://verifier.sandbox.trustbloc.dev/verifier/credentials',
    presentation_url: 'https://verifier.sandbox.trustbloc.dev/verifier/presentations'
  },
  {
    id: COMPANIES.DANUBE_TECH,
    alt: 'Danube Tech Verifier Logo',
    src: 'danube_tech.png',
    credential_url: 'https://univerifier.io/api/verifier/credentials',
    presentation_url: 'https://univerifier.io/api/verifier/presentations'
  },
  {
    id: COMPANIES.DIGITAL_BAZAAR,
    alt: 'Digital Bazaar Verifier Logo',
    src: 'digital_bazaar.png',
    credential_url: 'https://verifier.interop.digitalbazaar.com/verifier/credentials',
    presentation_url: 'https://verifier.interop.digitalbazaar.com/verifier/presentations'
  },
  {
    id: COMPANIES.FACTOM,
    alt: 'Factom Verifier Logo',
    src: 'factom.png',
    credential_url: 'https://vc.api.factom.sphereon.com/services/verify/credentials',
    presentation_url: 'https://vc.api.factom.sphereon.com/services/verify/presentations'
  },
  {
    id: COMPANIES.SICPA,
    alt: 'Sicpa Verifier Logo',
    src: 'sicpa.png',
    credential_url: 'https://svip-interop.ocs-support.com/api/verifier/credentials',
    presentation_url: 'https://svip-interop.ocs-support.com/api/verifier/presentations '
  }
];