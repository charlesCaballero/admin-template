import { DialogType } from "./types";

export interface FormState {
  password: string;
  showPassword: boolean;
}

export interface DialogProps {
  variant?: DialogType;
  onClose: (conf: boolean) => void;
  label: string;
}
