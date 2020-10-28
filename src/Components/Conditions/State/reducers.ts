import { ADD_CONDITION, Condition, ConditionsActionTypes, ConditionsState, REMOVE_CONDITION } from "./types"

const initialState: ConditionsState = {
  conditions: new Array<Condition>()
}

export const conditionsReducer = (state = initialState, action: ConditionsActionTypes): ConditionsState => {
  switch (action.type) {
    case ADD_CONDITION: {
      return { ...state, conditions: state.conditions.concat(action.payload) };
    }
    case REMOVE_CONDITION: {
      return { ...state, conditions: state.conditions.filter((condition: Condition) => condition.condition !== action.payload.condition) };
    }
    default: {
      return state;
    }
  }
}