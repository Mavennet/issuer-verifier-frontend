export const QPInbondCredential = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://schema.org/",
    "https://mavennet.github.io/contexts/qp-in-bond-v1.0.jsonld",
  ],
  id: "http://neo-flow.com/credentials/3aee17e7-8c50-4551-a8b4-9bc129c106e8",
  type: ["VerifiableCredential", "QPInbondCredential"],
  name: "QP Inbond",
  description:
    "Permit document for import/export of shipments that have not been cleared by US Customs.",
  issuer: "did:v1:test:nym:z6MkhdmzFu659ZJ4XKj31vtEDmjvsi5yDZG5L7Caz63oP39k",
  issuanceDate: "2020-04-09T21:13:43Z",
  credentialSubject: {
    productIdentifier: "3a185b8f-078a-4646-8343-76a45c2856a5",
    inBondNumber: "123456789",
    inBondType: "IT (61)",
    portOfEntry: "Superior, WI, USA",
    carrier: "did:v1:test:nym:z6MkhdmzFu659ZJ4XKj31vtEDmjvsi5yDZG5L7Caz63oP39k",
    irsNumber: "12345678-01",
    transportType: "Pipeline",
    recipient:
      "did:v1:test:nym:z6MknQLHcwKwopce5ji1Ftsurn8mNL58wTxZB238uEMsegUj",
    originAddress: {
      address: "Quebec, CAN",
      latitude: "52.9399",
      longitude: "73.5491",
    },
    deliveryAddress: {
      address: "Chicago, USA",
      latitude: "41.8781",
      longitude: "87.6298",
    },
    bolNumber: "BOL000104976",
    valuePerItem: "46",
    totalOrderValue: "126500",
    expectedDeliveryDates: "12-APR-2020",
    comments: "",
  },
};
