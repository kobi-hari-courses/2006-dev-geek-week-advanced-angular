import { Answer } from '../models/answer';
import { QuizState } from './quiz.model';

export function initialAnswers(count: number): Answer[] {
    let res: Answer[] = [];

    for (let index = 0; index < count; index++) {
        res.push({
            userAnswer: null, 
            isCorrect: null
        });        
    }

    return res;
}

export function isQuizDone(state: QuizState): boolean {
    return (state.answers.filter(a => a.userAnswer === null).length === 0);
}

export function answerCurrentQuestion(state: QuizState, answer: number): QuizState {
    const curQuestionIndex = state.answers.findIndex(answer => answer.userAnswer === null);
    const curQuestion = state.questions[curQuestionIndex];
    const correctAnswer = curQuestion.correctAnswer;
    const isCorrect = answer === correctAnswer;

    const newAnswer: Answer = {
        userAnswer: answer, 
        isCorrect: isCorrect
    }

    const allAnswers = state.answers.map((ans, idx) => idx === curQuestionIndex
                    ? newAnswer
                    : ans
                    );

    const res: QuizState = {
        ...state, 
        answers: allAnswers
    }

    return res;
}