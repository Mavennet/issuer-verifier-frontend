export const QPInbondCredential = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://schema.org/",
    "https://mavennet.github.io/contexts/qp-in-bond-v1.0.jsonld"
  ],
  "id": "dd0fbb48-7071-11ea-bc55-0242ac130003",
  "type": [
      "VerifiableCredential",
      "QPInbondCredential"
  ],
  "issuanceDate": "2020-03-31T21:15:02Z",
  "credentialSubject": {
      "productIdentifier": "dd0fbb48-7071-11ea-bc55-0242ac130003",
      "inBondNumber": "123456789",
      "inBondType": "IT (61)",
      "portOfEntry": "Superior, WI, USA",
      "carrier": "did:v1:test:nym:z6MkhdmzFu659ZJ4XKj31vtEDmjvsi5yDZG5L7Caz63oP39k",
      "irsNumber": "12345678-01",
      "transportType": "Pipeline",
      "recipient": "did:v1:test:nym:z6MknQLHcwKwopce5ji1Ftsurn8mNL58wTxZB238uEMsegUj",
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
      "bolNumber": "BOL000104976",
      "valuePerItem": "46",
      "totalOrderValue": "126500",
      "expectedDeliveryDates": "26-MAR-2020",
      "comments": ""
  }
}