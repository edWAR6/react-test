export const ADD_CONDITION = 'ADD_CONDITION';
export const REMOVE_CONDITION = 'REMOVE_CONDITION';

export interface Condition {
  type: string
  condition: string
  checked?: boolean
}

export interface ConditionsState {
  conditions: Array<Condition>
}

interface AddConditionAction {
  type: typeof ADD_CONDITION
  payload: Condition
}

interface RemoveConditionAction {
  type: typeof REMOVE_CONDITION
  payload: Condition
}

export type ConditionsActionTypes = AddConditionAction | RemoveConditionAction

export interface TypeSectionProps {
  type: string
  labelId: string
  conditions: Array<Condition>
  addCondition: Function
  removeCondition: Function
}

export interface ConditionItemProps {
  labelId: string
  condition: Condition
  addCondition: Function
  removeCondition: Function
}

export interface ConditionsProps {
  conditions: Array<Condition>
  addCondition: Function
  removeCondition: Function
}