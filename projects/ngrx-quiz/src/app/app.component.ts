import { RouterLogicService } from './services/router-logic.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { QuizActions } from './redux/quiz.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{

  constructor(
    private store: Store<any>, 
    private routerLogicService:  RouterLogicService){}

  ngOnInit(): void {
    this.routerLogicService.start();
  }

  ngOnDestroy(): void {
    this.routerLogicService.dispose();
  }

  reset() {
    this.store.dispatch(QuizActions.reset());
  }}
