import { Demographic, DemographicActionTypes, SAVE_DEMOGRAPHIC } from "./types";

export const saveDemographic = (demographic: Demographic): DemographicActionTypes => ({
  type: SAVE_DEMOGRAPHIC,
  payload: demographic,
});