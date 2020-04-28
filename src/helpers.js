import { v4 as uuidv4 } from 'uuid';

import { VERIFIERS } from './consts';

export const getCredentialQuery = type => ({
  web: {
    VerifiablePresentation: {
      query: [
        {
          type: 'QueryByExample',
          credentialQuery: {
            reason: `Please present an ${type} credential.`,
            example: {
              '@context': [
                'https://www.w3.org/2018/credentials/v1',
                "https://schema.org/"
              ],
              type: [type],
            },
          },
        }
      ],
      challenge: uuidv4()
    }
  }
});

export const getVerifiablePresentation = verifiableCredential => ({
  "@context": [
    "https://www.w3.org/2018/credentials/v1"
  ],
  "type": "VerifiablePresentation",
  "verifiableCredential": verifiableCredential
});

export const getOptions = (issuer, proofPurpose, verificationMethod) => ({
  issuer,
  issuanceDate: new Date().toISOString(),
  proofPurpose,
  assertionMethod: verificationMethod
});