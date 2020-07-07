import { createFeatureSelector, createSelector } from '@ngrx/store';
import { QuizState, QuizFeatureKey } from './quiz.model';
import { isQuizDone } from './quiz.helpers';

export const selectState = 
    createFeatureSelector<QuizState>(QuizFeatureKey);

export const selectCurrentQuestionIndex = createSelector(
    selectState, 
    state => state.answers.findIndex(answer => answer.userAnswer === null)
);

export const selectCurrentQuestion = createSelector(
    selectState, 
    selectCurrentQuestionIndex, 
    (state, index) => state.questions[index]
);

export const selectAllAnswers = createSelector(
    selectState, 
    state => state.answers
);

export const selectIsDone = createSelector(
    selectState, 
    state => isQuizDone(state)
);

export const selectCorrectCount = createSelector(
    selectAllAnswers, 
    answers => answers.filter(a => a.isCorrect === true).length
);

export const selectWrongCount = createSelector(
    selectAllAnswers, 
    answers => answers.filter(a => a.isCorrect === false).length
);