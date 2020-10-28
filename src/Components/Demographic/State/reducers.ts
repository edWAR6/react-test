import { DemographicActionTypes, DemographicState, SAVE_DEMOGRAPHIC } from "./types"

const initialState: DemographicState = {
  demographic: {
    firstName: '',
    lastName: '',
    gender: '',
    birthday: new Date(),
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    status: '',
  }
}

export const demographicReducer = (state = initialState, action: DemographicActionTypes): DemographicState => {
  switch (action.type) {
    case SAVE_DEMOGRAPHIC: {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
}