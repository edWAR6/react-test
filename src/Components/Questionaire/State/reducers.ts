import { ADD_QUESTION, LOAD_QUESTIONS_FAILURE, LOAD_QUESTIONS_IN_PROGRESS, LOAD_QUESTIONS_SUCCESS, Question, QuestionsActionTypes, QuestionsState } from "./types"

const initialState: QuestionsState = {
  isLoading: false,
  questions: new Array<Question>()
}

export const questionsReducer = (state = initialState, action: QuestionsActionTypes): QuestionsState => {
  switch (action.type) {
    case LOAD_QUESTIONS_IN_PROGRESS:
      return { ...state, isLoading: true };
    case LOAD_QUESTIONS_SUCCESS: {
      const questions = action.payload.filter((question: Question) => !state.questions.some((stateQuestion) => question.question === stateQuestion.question));
      return { ...state, questions: [...questions],  isLoading: false }
    }
    case LOAD_QUESTIONS_FAILURE: {
      return { ...state, isLoading: false };
    }
    case ADD_QUESTION: {
      const questions = state.questions.filter((question: Question) => question.question !== action.payload.question)
      return { ...state, questions: questions.concat(action.payload) };
    }
    default:
      return state;
  }
}