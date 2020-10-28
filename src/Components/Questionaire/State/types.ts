export const LOAD_QUESTIONS_IN_PROGRESS = 'LOAD_QUESTIONS_IN_PROGRESS';
export const LOAD_QUESTIONS_SUCCESS = 'LOAD_QUESTIONS_SUCCESS';
export const LOAD_QUESTIONS_FAILURE = 'LOAD_QUESTIONS_FAILURE';
export const ADD_QUESTION = 'ADD_QUESTION';

export interface Question {
  question: string,
  response?: boolean,
  inquiry: string,
  answer?: string
}

export interface QuestionsState {
  isLoading: boolean
  questions: Array<Question>
}

interface loadQuestionsInProgressAction {
  type: typeof LOAD_QUESTIONS_IN_PROGRESS
}

interface loadQuestionsSuccessAction {
  type: typeof LOAD_QUESTIONS_IN_PROGRESS
  payload: Promise<void>
}

interface loadQuestionsFailureAction {
  type: typeof LOAD_QUESTIONS_IN_PROGRESS
}

interface AddQuestionAction {
  type: typeof ADD_QUESTION
  payload: Question
}

export type QuestionsActionTypes = loadQuestionsInProgressAction | loadQuestionsSuccessAction | loadQuestionsFailureAction | AddQuestionAction | any;

export interface QuestionaireProps {
  isLoading: boolean
  loadQuestions: Function
  questions: Array<Question>
  addQuestion: Function
}

export interface QuestionControlsProps {
  question: Question
  addQuestion: Function
}