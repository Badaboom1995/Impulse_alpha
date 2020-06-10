export const OPEN_ALERT = "general/OPEN_ALERT";
export const CLOSE_ALERT = "general/CLOSE_ALERT";

export interface OpenAlertAction {
  type: typeof OPEN_ALERT;
}
export interface CloseAlertAction {
  type: typeof CLOSE_ALERT;
}

export type GeneralActionTypes = OpenAlertAction | CloseAlertAction;
