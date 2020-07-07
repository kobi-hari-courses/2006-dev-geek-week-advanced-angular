import { createAction, props } from '@ngrx/store';

export const reset = createAction(
    '[Quiz] Reset'
);

export const answerCurrentQuestion = createAction(
    '[Quiz] Answer Current Question', 
    props<{answerIndex: number}>()
);