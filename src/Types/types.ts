import { ConditionsState } from "../Components/Conditions/State/types";
import { DemographicState } from "../Components/Demographic/State/types";
import { QuestionsState } from "../Components/Questionaire/State/types";

export interface ConvinedStates {
  demographicState: DemographicState,
  conditionsState: ConditionsState,
  questionsState: QuestionsState
}