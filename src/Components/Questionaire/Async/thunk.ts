import { loadQuestionsFailure, loadQuestionsInProgress, loadQuestionsSuccess } from '../State/actions';

import { AnyAction } from 'redux';
import { Question } from '../State/types';
import { ThunkDispatch } from 'redux-thunk'
import getAllQuestions from "../Async/questions";

export const loadQuestions = () => async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
  try {
    dispatch(loadQuestionsInProgress());
    const questions: Array<Question> = await getAllQuestions();

    dispatch(loadQuestionsSuccess(questions));
  } catch (error) {
    dispatch(loadQuestionsFailure());
    dispatch(displayAlert(error));
  }
}

export const displayAlert = (text: string) => () => {
  alert(text);
}
