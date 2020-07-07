import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { QuizActions } from './redux/quiz.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private store: Store<any>){}

  reset() {
    this.store.dispatch(QuizActions.reset());
  }}
