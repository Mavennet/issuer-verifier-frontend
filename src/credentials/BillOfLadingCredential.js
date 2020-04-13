export const BillOfLadingCredential = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://schema.org/",
    "https://mavennet.github.io/contexts/bill-of-lading-v1.0.jsonld",
  ],
  id: "http://neo-flow.com/credentials/e94a16cb-35b2-4301-9fb6-7af3d8fe7b81",
  type: ["VerifiableCredential", "BillOfLadingCredential"],
  name: "Bill of Lading",
  description:
    "Detailed shipment document provided by the carrier to the receiver of products.",
  issuer: "did:v1:test:nym:z6MkhdmzFu659ZJ4XKj31vtEDmjvsi5yDZG5L7Caz63oP39k",
  issuanceDate: "2020-04-09T21:13:13Z",
  credentialSubject: {
    productIdentifier: "3a185b8f-078a-4646-8343-76a45c2856a5",
    bolNumber: "BOL000104976",
    carrier: "did:v1:test:nym:z6MkhdmzFu659ZJ4XKj31vtEDmjvsi5yDZG5L7Caz63oP39k",
    recipient:
      "did:v1:test:nym:z6MknQLHcwKwopce5ji1Ftsurn8mNL58wTxZB238uEMsegUj",
    transportType: "Pipeline",
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
    valuePerItem: "46",
    totalOrderValue: "126500",
    freightChargeTerms: "Freight Prepaid",
    expectedDeliveryDates: "12-APR-2020",
    comments: "",
  },
};
