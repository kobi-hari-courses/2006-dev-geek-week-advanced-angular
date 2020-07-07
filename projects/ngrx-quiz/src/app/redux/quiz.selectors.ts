import { createFeatureSelector, createSelector } from '@ngrx/store';
import { QuizState, QuizFeatureKey } from './quiz.model';

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