export const issuerOptions = {
  "Danube Tech": {
    verify_credential_endpoint:
      "https://univerifier.io/api/verifier/credentials",
    verify_presentation_endpoint:
      "https://univerifier.io/api/verifier/presentations",
    src: 'danube_tech.png',
    alt: 'company logo',
    issuers: [
      {
        name: "Universal Issuer (did:sov)",
        endpoint: "https://uniissuer.io/api/credentials/issueCredential",
        options: [
          {
            issuer: "did:sov:danube:VZoG2R1UneUscisG1eLxJb",
            assertionMethod: "did:sov:danube:VZoG2R1UneUscisG1eLxJb#key-1",
          },
        ],
      },
      {
        name: "Universal Issuer (div:v1)",
        endpoint: "https://uniissuer.io/api/credentials/issueCredential",
        options: [
          {
            issuer:
              "did:v1:test:nym:z6MktyAYL7sVcmPQPTbbMqrnGMNwp6zkvRvKREs94f81fA1K",
            assertionMethod:
              "did:v1:test:nym:z6MktyAYL7sVcmPQPTbbMqrnGMNwp6zkvRvKREs94f81fA1K#z6MkgumSeJ8FGqFjXFPJSsT2EFCNYVvx5RXDQ6oBYDrmtiDb",
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
    src: 'digital_bazaar.png',
    alt: 'company logo', 
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
  Transmute: {
    verify_credential_endpoint:
      "https://vc.transmute.world/v0.1.0/verify/credentials",
    verify_presentation_endpoint:
      "https://vc.transmute.world/v0.1.0/verify/presentations",
    src: 'transmute_verifier.png',
    alt: 'company logo', 
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
  "Secure Key": {
    verify_credential_endpoint:
      "https://verifier.sandbox.trustbloc.dev/verifier/credentials",
    verify_presentation_endpoint:
      "https://verifier.sandbox.trustbloc.dev/verifier/presentations",
    src: 'secure_key.png',
    alt: 'company logo', 
    issuers: [
      {
        name: "TrustBloc Issuer - TrustBloc DID",
        endpoint:
          "https://issuer.sandbox.trustbloc.dev/vc-issuer-interop/credentials/issueCredential",
        options: [
          {
            issuer:
              "did:trustbloc:testnet.trustbloc.dev:EiCK3DGsh6BzGNm4gSTW1UMWHkGk3OrQ52pfTkYH1_DLlg",
            assertionMethod:
              "did:trustbloc:testnet.trustbloc.dev:EiCK3DGsh6BzGNm4gSTW1UMWHkGk3OrQ52pfTkYH1_DLlg#key-1",
          },
        ],
      },
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
  Mavennet: {
    verify_credential_endpoint: "https://api.neo-flow.com/verifier/credentials",
    verify_presentation_endpoint:
      "https://api.neo-flow.com/verifier/presentations",
    src: 'mavennet_verifier.png',
    alt: 'company logo', 
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
        name: "DID Test Issuer",
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
};
