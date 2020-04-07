import { CrudeProductCredential } from '../credentials/CrudeProductCredential';
import { CrudeInspectionCredential } from '../credentials/CrudeInspectionCredential';
import { QPInbondCredential } from '../credentials/QPInbondCredential';
import { BillOfLadingCredential } from '../credentials/BillOfLadingCredential';

export const credentialOptions= [
  {
    id: 0,
    label: 'CrudeProductCredential',
    value: CrudeProductCredential
  },
  {
    id: 1,
    label: 'CrudeInspectionCredential',
    value: CrudeInspectionCredential
  },
  {
    id: 2,
    label: 'QPInbondCredential',
    value: QPInbondCredential
  },
  {
    id: 3,
    label: 'BillOfLadingCredential',
    value: BillOfLadingCredential
  }
]