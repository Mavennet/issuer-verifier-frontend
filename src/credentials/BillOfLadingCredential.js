export const BillOfLadingCredential = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://schema.org/",
    "https://mavennet.github.io/contexts/bill-of-lading-v1.0.jsonld"
  ],
  "id": "dd0fbb48-7071-11ea-bc55-0242ac130003",
  "type": [
      "VerifiableCredential",
      "BillOfLadingCredential"
  ],
  "issuanceDate": "2020-03-31T21:14:15Z",
  "credentialSubject": {
      "productIdentifier": "dd0fbb48-7071-11ea-bc55-0242ac130003",
      "bolNumber": "BOL000104976",
      "carrier": "did:v1:test:nym:z6MkhdmzFu659ZJ4XKj31vtEDmjvsi5yDZG5L7Caz63oP39k",
      "recipient": "did:v1:test:nym:z6MknQLHcwKwopce5ji1Ftsurn8mNL58wTxZB238uEMsegUj",
      "transportType": "Pipeline",
      "originAddress": {
          "address": "Quebec, CAN",
          "latitude": "52.9399",
          "longitude": "73.5491"
      },
      "deliveryAddress": {
          "address": "Chicago, USA",
          "latitude": "41.8781",
          "longitude": "87.6298"
      },
      "valuePerItem": "46",
      "totalOrderValue": "126500",
      "freightChargeTerms": "Freight Prepaid",
      "expectedDeliveryDates": "30-MAR-2020",
      "comments": ""
  }
}