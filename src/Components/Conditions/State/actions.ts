import { ADD_CONDITION, Condition, ConditionsActionTypes, REMOVE_CONDITION } from "./types";

export const addCondition = (condition: Condition): ConditionsActionTypes => ({
  type: ADD_CONDITION,
  payload: condition,
});

export const removeCondition = (condition: Condition): ConditionsActionTypes => ({
  type: REMOVE_CONDITION,
  payload: condition,
});