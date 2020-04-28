import { VERIFIERS } from '../consts';

export const verifierOptions = [
  {
    id: VERIFIERS.MAVENNET,
    alt: 'Mavennet Verifier Logo',
    src: 'mavennet_verifier.png',
    credential_url: 'https://api.neo-flow.com/verifier/credentials',
    presentation_url: 'https://api.neo-flow.com/verifier/presentations'
  },
  {
    id: VERIFIERS.TRANSMUTE,
    alt: 'Transmute Verifier Logo',
    src: 'transmute_verifier.png',
    credential_url: 'https://vc.transmute.world/v0.1.0/verify/credentials',
    presentation_url: 'https://vc.transmute.world/v0.1.0/verify/presentations'
  },
  {
    id: VERIFIERS.SECURE_KEY,
    alt: 'Secure Key Verifier Logo',
    src: 'secure_key.png',
    credential_url: 'https://verifier.sandbox.trustbloc.dev/verifier/credentials',
    presentation_url: 'https://verifier.sandbox.trustbloc.dev/verifier/presentations'
  },
  {
    id: VERIFIERS.DANUBE_TECH,
    alt: 'Danube Tech Verifier Logo',
    src: 'danube_tech.png',
    credential_url: 'https://univerifier.io/api/verifier/credentials',
    presentation_url: 'https://univerifier.io/api/verifier/presentations'
  },
  {
    id: VERIFIERS.DIGITAL_BAZAAR,
    alt: 'Digital Bazaar Verifier Logo',
    src: 'digital_bazaar.png',
    credential_url: 'https://verifier.interop.digitalbazaar.com/verifier/credentials',
    presentation_url: 'https://verifier.interop.digitalbazaar.com/verifier/presentations'
  },
  {
    id: VERIFIERS.FACTOM,
    alt: 'Factom Verifier Logo',
    src: 'factom_logo.png',
    credential_url: 'https://vc.api.factom.sphereon.com/services/verify/credentials',
    presentation_url: 'https://vc.api.factom.sphereon.com/services/verify/presentations'
  },
];