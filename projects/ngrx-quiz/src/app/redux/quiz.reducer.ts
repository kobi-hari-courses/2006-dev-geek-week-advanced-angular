import { createReducer } from '@ngrx/store';
import { initialState } from './quiz.model';

export const quizReducer = createReducer(initialState);