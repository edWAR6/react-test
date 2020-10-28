import { ADD_QUESTION, LOAD_QUESTIONS_FAILURE, LOAD_QUESTIONS_IN_PROGRESS, LOAD_QUESTIONS_SUCCESS, Question, QuestionsActionTypes } from "./types";

export const loadQuestionsInProgress = () => ({
  type: LOAD_QUESTIONS_IN_PROGRESS,
})

export const loadQuestionsSuccess = (questions: Array<Question>) => ({
  type: LOAD_QUESTIONS_SUCCESS,
  payload: questions,
})

export const loadQuestionsFailure = () => ({
  type: LOAD_QUESTIONS_FAILURE,
})

export const addQuestion = (question: Question): QuestionsActionTypes => ({
  type: ADD_QUESTION,
  payload: question,
});