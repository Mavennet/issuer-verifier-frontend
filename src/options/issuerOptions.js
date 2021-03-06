export const issuerOptions = {
  Mavennet: {
    verify_credential_endpoint: "https://api.neo-flow.com/verifier/credentials",
    verify_presentation_endpoint:
      "https://api.neo-flow.com/verifier/presentations",
    src: "mavennet.png",
    alt: "Mavennet Logo",
    issuers: [
      {
        name: "DID Key Issuer",
        endpoint: "https://api.neo-flow.com/credentials/issueCredential",
        options: [
          {
            issuer: "did:key:z6MkiTsvjrrPNDZ1rrg9QDEYCFWCmEswT6U2cEkScb7edQ9b",
            assertionMethod:
              "did:key:z6MkiTsvjrrPNDZ1rrg9QDEYCFWCmEswT6U2cEkScb7edQ9b#z6MkiTsvjrrPNDZ1rrg9QDEYCFWCmEswT6U2cEkScb7edQ9b",
            authenticationMethod:
              "did:key:z6MkiTsvjrrPNDZ1rrg9QDEYCFWCmEswT6U2cEkScb7edQ9b#z6MkiTsvjrrPNDZ1rrg9QDEYCFWCmEswT6U2cEkScb7edQ9b",
          },
        ],
      },
      {
        name: "DID:V1 Issuer",
        endpoint: "https://api.neo-flow.com/credentials/issueCredential",
        options: [
          {
            issuer:
              "did:v1:test:nym:z6MkfG5HTrBXzsAP8AbayNpG3ZaoyM4PCqNPrdWQRSpHDV6J",
            assertionMethod:
              "did:v1:test:nym:z6MkfG5HTrBXzsAP8AbayNpG3ZaoyM4PCqNPrdWQRSpHDV6J#z6MkqfvdBsFw4QdGrZrnx7L1EKfY5zh9tT4gumUGsMMEZHY3",
            authenticationMethod:
              "did:v1:test:nym:z6MkfG5HTrBXzsAP8AbayNpG3ZaoyM4PCqNPrdWQRSpHDV6J#z6MkvQkEMVaaQcRhP62XfjUGn7gSkVCprvB3pyUubmBS85Yk",
          },
        ],
      },
    ],
  },
  Transmute: {
    verify_credential_endpoint:
      "https://vc.transmute.world/v0.1.0/verify/credentials",
    verify_presentation_endpoint:
      "https://vc.transmute.world/v0.1.0/verify/presentations",
    src: "transmute.png",
    alt: "Transmute Logo",
    issuers: [
      {
        name: "DID Web Issuer",
        endpoint:
          "https://vc.transmute.world/v0.0.0/credentials/issueCredential",
        options: [
          {
            issuer: "did:web:vc.transmute.world",
            assertionMethod:
              "did:web:vc.transmute.world#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
          },
        ],
      },
      {
        name: "DID Issuers",
        endpoint: "https://vc.transmute.world/v0.1.0/issue/credentials",
        options: [
          {
            issuer: "did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd",
            assertionMethod:
              "did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd#z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd",
          },
          {
            issuer:
              "did:elem:ropsten:EiBJJPdo-ONF0jxqt8mZYEj9Z7FbdC87m2xvN0_HAbcoEg",
            assertionMethod:
              "did:elem:ropsten:EiBJJPdo-ONF0jxqt8mZYEj9Z7FbdC87m2xvN0_HAbcoEg#xqc3gS1gz1vch7R3RvNebWMjLvBOY-n_14feCYRPsUo",
          },
          {
            issuer:
              "did:v1:test:nym:z6MkhdmzFu659ZJ4XKj31vtEDmjvsi5yDZG5L7Caz63oP39k",
            assertionMethod:
              "did:v1:test:nym:z6MkhdmzFu659ZJ4XKj31vtEDmjvsi5yDZG5L7Caz63oP39k#z6MkiukuAuQAE8ozxvmahnQGzApvtW7KT5XXKfojjwbdEomY",
          },
        ],
      },
    ],
  },
  Factom: {
    verify_credential_endpoint:
      "https://vc.api.factom.sphereon.com/services/verify/credentials",
    verify_presentation_endpoint:
      "https://vc.api.factom.sphereon.com/services/verify/presentations",
    src: "factom.png",
    alt: "Factom Logo",
    issuers: [
      {
        name: "DID Issuers",
        endpoint:
          "https://vc.api.factom.sphereon.com/services/issue/credentials",
        options: [
          {
            issuer:
              "did:factom:5d0dd58757119dd437c70d92b44fbf86627ee275f0f2146c3d99e441da342d9f",
            assertionMethod:
              "did:factom:5d0dd58757119dd437c70d92b44fbf86627ee275f0f2146c3d99e441da342d9f#key-0",
          },
          {
            issuer:
              "did:v1:test:nym:z6MkvSbsrm44VnhngbyW2rZk2u9bvSPUSmJwqYjMd4RSJT7A",
            assertionMethod:
              "did:v1:test:nym:z6MkvSbsrm44VnhngbyW2rZk2u9bvSPUSmJwqYjMd4RSJT7A#z6MkjFhRvbXfjmQ8iFHeYh42cNS7v4CtguLzvwZSXcHe8zqy",
          },
        ],
      },
    ],
  },
  "Digital Bazaar": {
    verify_credential_endpoint:
      "https://verifier.interop.digitalbazaar.com/verifier/credentials",
    verify_presentation_endpoint:
      "https://verifier.interop.digitalbazaar.com/verifier/presentations",
    src: "digital_bazaar.png",
    alt: "Digital Bazaar Logo",
    issuers: [
      {
        name: "DID Key Issuer",
        endpoint:
          "https://issuer.interop.digitalbazaar.com/credentials/did%3Akey%3Az6MkkHSTSr9DSNLoioiVEZq8RKm9Sn1Xs4SjZXgzQASBMdc3/issueCredential",
        options: [
          {
            issuer: "did:key:z6Mkg9AkjefxdJFSphkStzXwHQnbweN43mCqA37aANGRxF1o",
            assertionMethod:
              "did:key:z6Mkg9AkjefxdJFSphkStzXwHQnbweN43mCqA37aANGRxF1o#z6Mkg9AkjefxdJFSphkStzXwHQnbweN43mCqA37aANGRxF1o",
          },
        ],
      },
    ],
  },
  "Danube Tech": {
    verify_credential_endpoint:
      "https://univerifier.io/api/verifier/credentials",
    verify_presentation_endpoint:
      "https://univerifier.io/api/verifier/presentations",
    src: "danube_tech.png",
    alt: "Danube Tech Logo",
    issuers: [
      {
        name: "Universal Issuer (div:v1)",
        endpoint: "https://uniissuer.io/api/credentials/issueCredential",
        options: [
          {
            issuer:
              "did:v1:test:nym:z6MkfqxbQu6ikzpZRM3GwaFiUzy5vDgbmt99MGLA38kZUnEB",
            assertionMethod:
              "did:v1:test:nym:z6MkfqxbQu6ikzpZRM3GwaFiUzy5vDgbmt99MGLA38kZUnEB#z6MkgmQGoevpPSeqb74jYSomuoWhXyJ9t5XtMAPq6NVFGssL",
          },
        ],
      },
    ],
  },
  "Secure Key": {
    verify_credential_endpoint:
      "https://verifier.sandbox.trustbloc.dev/verifier/credentials",
    verify_presentation_endpoint:
      "https://verifier.sandbox.trustbloc.dev/verifier/presentations",
    src: "secure_key.png",
    alt: "Secure Key Logo",
    issuers: [
      {
        name: "TrustBloc Issuer - DID Key",
        endpoint:
          "https://issuer.sandbox.trustbloc.dev/vc-issuer-interop-key/credentials/issueCredential",
        options: [
          {
            issuer: "did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd",
            assertionMethod:
              "did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd#z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd",
          },
        ],
      },
    ],
  },
  Sicpa: {
    verify_credential_endpoint:
      "https://svip-interop.ocs-support.com/api/verifier/credentials",
    verify_presentation_endpoint:
      "https://svip-interop.ocs-support.com/api/verifier/presentations",
    src: "sicpa.png",
    alt: "Sicpa Logo",
    issuers: [
      {
        name: "DID Key Issuer",
        endpoint:
          "https://svip-interop.ocs-support.com/api/credentials/issueCredential",
        options: [
          {
            issuer: "did:key:z6MkrqCMy45WhL3UEa1gGTHUtr17AvU4czfP5fH9KNDoYaYN",
            assertionMethod:
              "did:key:z6MkrqCMy45WhL3UEa1gGTHUtr17AvU4czfP5fH9KNDoYaYN#z6MkrqCMy45WhL3UEa1gGTHUtr17AvU4czfP5fH9KNDoYaYN",
          },
        ],
      },
    ],
  },
};
