export const PermanentResidentCard = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://w3id.org/citizenship/v1",
  ],
  type: ["VerifiableCredential", "PermanentResidentCard"],
  credentialSubject: {
    id: "did:gov:usa:dhs:uscis:d656a3c3-0f14-477c-9a9f-ae4c2524af32",
    type: ["PermanentResident", "Person"],
    givenName: "JOHN",
    familyName: "SMITH",
    gender: "Male",
    image: "data:image/png;base64,iVBORw0KGgo...kJggg==",
    residentSince: "2015-01-01",
    lprCategory: "C09",
    lprNumber: "000-000-204",
    commuterClassification: "C1",
    birthCountry: "Bahamas",
    birthDate: "1958-08-17",
  },
  issuer: "did:sov:danube:2PmNu2MaxZ97uyZyJJscqH",
  issuanceDate: "2020-03-27T22:49:29Z",
};
