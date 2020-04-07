export const vcList= [
  {
    id: 0,
    label: 'CrudeProductCredential',
    value: {
      "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://schema.org/",
        "https://mavennet.github.io/contexts/crude-product-v1.0.jsonld"
      ],
      "id": "3a185b8f-078a-4646-8343-76a45c2856a5",
      "type": [
          "VerifiableCredential",
          "CrudeProductCredential"
      ],
      "issuer": "did:v1:test:nym:z6MkmbrHuhkzwWYeJjkBhTYktabXR22ECzk1WrHJPW69EsJY",
      "issuanceDate": "2020-03-31T21:10:12Z",
      "credentialSubject": {
          "producer": "did:v1:test:nym:z6MkfG5HTrBXzsAP8AbayNpG3ZaoyM4PCqNPrdWQRSpHDV6J",
          "category": "Western Canadian Select",
          "hsCode": "270900",
          "identifier": "3a185b8f-078a-4646-8343-76a45c2856a5",
          "name": "Heavy Sour Dilbit",
          "description": "",
          "volume": "10000",
          "address": {
              "address": "Edmonton, CAN",
              "latitude": "53.5461",
              "longitude": "113.4938"
          },
          "productionDate": "2020-03-30T07:23:14.206Z",
          "predecessorOf": "c98f2452-ab18-4cbe-bf89-635fb8ae7f33",
          "successorOf": "",
          "physicalSpecs": {
              "uom": "barrel",
              "minimumQuantity": "1000",
              "apiGravity": 21,
              "viscosityAt10C": "302",
              "viscosityAt20C": "157",
              "viscosityAt30C": "89.6",
              "viscosityAt40C": "55.3",
              "viscosityAt45C": "44.4",
              "pourPoint": "-30",
              "vapourPressure": "51.7",
              "density": "928",
              "naphtha": "",
              "distillateAt350To650F": "",
              "gasOilAt650To980F": "",
              "residAt980F": "41",
              "deemedButane": "1.9",
              "tan": "1.05",
              "ron": "",
              "mon": "",
              "boilingPoint": "",
              "freezingPoint": "",
              "criticalTemperature": "",
              "criticalPressure": "",
              "autoIgnitionTemperatureInAirAt1atm": "",
              "solubilityInTrichloroethylene": "",
              "penetrationAt25C100g5sec": "",
              "softeningPoint": "",
              "ductilityAt25C": "",
              "olefin": "",
              "color": "",
              "odor": "",
              "grossCalorificValueAt15C": "",
              "netCalorificValueAt15C": "",
              "airRequiredForCombustion": "",
              "copperCorrosionAt38CFor1Hour": ""
          },
          "chemicalSpecs": {
              "microCarbonResidue": "9.68",
              "aromaticsTotalBTEX": "0.23",
              "sedimentAndWater": "188",
              "liquidPhaseH2S": "",
              "mercury": "",
              "oxygenates": "",
              "filterableSolids": "",
              "phosphorousVolatile": "",
              "mediumChainTriglycerides": "",
              "benzene": "",
              "particulates": "",
              "organicChlorides": "",
              "nickel": "54",
              "vanadium": "132.5",
              "water": "",
              "molecularWeight": "",
              "sulphur": "3.66",
              "naphthenes": "",
              "chloride": "",
              "arsenic": "",
              "lead": "",
              "ethene": "",
              "propane": "",
              "isoButane": "",
              "nButane": "",
              "hydrocarbonsHeavier": "",
              "unsaturatedHydrocarbons": ""
          }
      }
    }
  },
  {
    id: 1,
    label: 'CrudeInspectionCredential',
    value: {
      "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://schema.org/",
        "https://mavennet.github.io/contexts/crude-inspection-v1.0.jsonld"
      ],
      "id": "dd0fbb48-7071-11ea-bc55-0242ac130003",
      "type": [
          "VerifiableCredential",
          "CrudeInspectionCredential"
      ],
      "issuer": "did:v1:test:nym:z6MkhdmzFu659ZJ4XKj31vtEDmjvsi5yDZG5L7Caz63oP39k",
      "issuanceDate": "2020-03-31T21:12:57Z",
      "credentialSubject": {
          "producer": "did:v1:test:nym:z6MkfG5HTrBXzsAP8AbayNpG3ZaoyM4PCqNPrdWQRSpHDV6J",
          "certifier": "did:v1:test:nym:z6MkhdmzFu659ZJ4XKj31vtEDmjvsi5yDZG5L7Caz63oP39k",
          "category": "Western Canadian Select",
          "hsCode": "270900",
          "identifier": "dd0fbb48-7071-11ea-bc55-0242ac130003",
          "name": "Heavy Sour Dilbit",
          "description": "",
          "volume": "10000",
          "address": {
              "address": "Edmonton, CAN",
              "latitude": "53.5461",
              "longitude": "113.4938"
          },
          "productionDate": "2020-03-30T07:23:14.206Z",
          "predecessorOf": "c98f2452-ab18-4cbe-bf89-635fb8ae7f33",
          "successorOf": "",
          "physicalSpecs": {
              "uom": "barrel",
              "minimumQuantity": "1000",
              "apiGravity": 21,
              "viscosityAt10C": "302",
              "viscosityAt20C": "157",
              "viscosityAt30C": "89.6",
              "viscosityAt40C": "55.3",
              "viscosityAt45C": "44.4",
              "pourPoint": "-30",
              "vapourPressure": "51.7",
              "density": "928",
              "naphtha": "",
              "distillateAt350To650F": "",
              "gasOilAt650To980F": "",
              "residAt980F": "41",
              "deemedButane": "1.9",
              "tan": "1.05",
              "ron": "",
              "mon": "",
              "boilingPoint": "",
              "freezingPoint": "",
              "criticalTemperature": "",
              "criticalPressure": "",
              "autoIgnitionTemperatureInAirAt1atm": "",
              "solubilityInTrichloroethylene": "",
              "penetrationAt25C100g5sec": "",
              "softeningPoint": "",
              "ductilityAt25C": "",
              "olefin": "",
              "color": "",
              "odor": "",
              "grossCalorificValueAt15C": "",
              "netCalorificValueAt15C": "",
              "airRequiredForCombustion": "",
              "copperCorrosionAt38CFor1Hour": ""
          },
          "chemicalSpecs": {
              "microCarbonResidue": "9.68",
              "aromaticsTotalBTEX": "0.23",
              "sedimentAndWater": "188",
              "liquidPhaseH2S": "",
              "mercury": "",
              "oxygenates": "",
              "filterableSolids": "",
              "phosphorousVolatile": "",
              "mediumChainTriglycerides": "",
              "benzene": "",
              "particulates": "",
              "organicChlorides": "",
              "nickel": "54",
              "vanadium": "132.5",
              "water": "",
              "molecularWeight": "",
              "sulphur": "3.66",
              "naphthenes": "",
              "chloride": "",
              "arsenic": "",
              "lead": "",
              "ethene": "",
              "propane": "",
              "isoButane": "",
              "nButane": "",
              "hydrocarbonsHeavier": "",
              "unsaturatedHydrocarbons": ""
          }
      }
    }
  },
  {
    id: 2,
    label: 'QPInbondCredential',
    value: {
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
      "issuer": "did:v1:test:nym:z6MkhdmzFu659ZJ4XKj31vtEDmjvsi5yDZG5L7Caz63oP39k",
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
  },
  {
    id: 3,
    label: 'BillOfLadingCredential',
    value: {
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
      "issuer": "did:v1:test:nym:z6MkhdmzFu659ZJ4XKj31vtEDmjvsi5yDZG5L7Caz63oP39k",
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
  }
]