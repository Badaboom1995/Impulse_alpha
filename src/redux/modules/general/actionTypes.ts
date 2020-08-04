import { LoadingTypes } from "./types";

export const OPEN_ALERT = "general/OPEN_ALERT";
export const CLOSE_ALERT = "general/CLOSE_ALERT";
export const START_LOADING = "general/START_LOADING";
export const END_LOADING = "general/END_LOADING";

export interface OpenAlertAction {
  type: typeof OPEN_ALERT;
  alertType: String;
  alertMessage: String;
}
export interface CloseAlertAction {
  type: typeof CLOSE_ALERT;
}
export interface StartLoadingAction {
  type: typeof START_LOADING;
  loadingType: LoadingTypes;
}
export interface EndLoadingAction {
  type: typeof END_LOADING;
  loadingType: LoadingTypes;
}

export type GeneralActionTypes =
  | OpenAlertAction
  | CloseAlertAction
  | StartLoadingAction
  | EndLoadingAction;
