import { LicenseType } from "./LicenseType";

export interface FormProps {
  handleSubmit: (frmdetails: FrmDetails) => void;
}

export type FrmDetails = {
  Search: string;
  License: LicenseType;
};
