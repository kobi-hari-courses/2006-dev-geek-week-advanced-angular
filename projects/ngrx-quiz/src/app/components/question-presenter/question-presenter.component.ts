import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from 'src/app/models/question';
import { Store } from '@ngrx/store';
import { QuizSelectors, QuizActions } from 'src/app/redux/quiz.types';

@Component({
  selector: 'app-question-presenter',
  templateUrl: './question-presenter.component.html',
  styleUrls: ['./question-presenter.component.scss']
})
export class QuestionPresenterComponent implements OnInit {
  question$: Observable<Question>;
  
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.question$ = this.store.select(QuizSelectors.selectCurrentQuestion);
  }

  setAnswer(index: number) {
    this.store.dispatch(QuizActions.answerCurrentQuestion({answerIndex: index}))
  }

}