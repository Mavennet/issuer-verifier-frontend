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