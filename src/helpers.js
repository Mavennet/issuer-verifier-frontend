import { v4 as uuidv4 } from 'uuid';

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
      challenge: '99591bde-acad-4b52-84b8-7167246ec0b3'
    }
  }
});

export const getAuthQuery = (domain) => {
  const challenge = uuidv4();

  const query = {
    web: {
      VerifiablePresentation: {
          query: {
              type: 'DIDAuth'
          },
          challenge,
          domain
      }
    }
  }

  return query;
}

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
  // proofPurpose,
  assertionMethod: verificationMethod
});

export const replaceUuidUrlId = (urlId) => {
  const newUuid = uuidv4();

  if (!urlId) {
    return `https://sampleurl.com/${newUuid}`;
  }

  const splitUrl = urlId.split('/');
  splitUrl[splitUrl.length - 1] = newUuid;
  const newUrl = splitUrl.join('/');

  return newUrl;
}