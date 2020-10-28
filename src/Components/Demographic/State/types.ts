export const SAVE_DEMOGRAPHIC = 'SAVE_DEMOGRAPHIC';

export interface Demographic {
  firstName: string,
  lastName: string,
  gender: string,
  birthday: Date,
  email: string,
  phone: string,
  address: string,
  city: string,
  state: string,
  zip: string,
  status: string,
}

export interface DemographicState {
  demographic: Demographic
}

interface SaveDemographicAction {
  type: typeof SAVE_DEMOGRAPHIC
  payload: DemographicState
}

export type DemographicActionTypes = SaveDemographicAction | any

export interface DemographicProps {
  demographic: Demographic
  onSave: Function
}