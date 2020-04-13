import { CrudeProductCredential } from '../credentials/CrudeProductCredential';
import { CrudeInspectionCredential } from '../credentials/CrudeInspectionCredential';
import { QPInbondCredential } from '../credentials/QPInbondCredential';
import { BillOfLadingCredential } from '../credentials/BillOfLadingCredential';
import { UniversityDegreeCredential } from '../credentials/UniversityDegreeCredential';
import { CertifiedMillTestReport } from '../credentials/CertifiedMillTestReport';
import { PermanentResidentCard } from '../credentials/PermanentResidentCard';

export const credentialOptions= [
  {
    label: 'CrudeProductCredential',
    value: CrudeProductCredential
  },
  {
    label: 'CrudeInspectionCredential',
    value: CrudeInspectionCredential
  },
  {
    label: 'QPInbondCredential',
    value: QPInbondCredential
  },
  {
    label: 'BillOfLadingCredential',
    value: BillOfLadingCredential
  },
  {
    label: 'UniversityDegreeCredential',
    value: UniversityDegreeCredential
  },
  {
    label: 'CertifiedMillTestReport',
    value: CertifiedMillTestReport
  },
  {
    label: 'PermanentResidentCard',
    value: PermanentResidentCard
  }
]