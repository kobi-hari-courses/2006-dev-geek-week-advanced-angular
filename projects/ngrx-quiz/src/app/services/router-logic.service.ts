import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, UrlTree } from '@angular/router';
import { Subscription } from 'rxjs';
import { QuizSelectors } from '../redux/quiz.types';

@Injectable({
  providedIn: 'root'
})
export class RouterLogicService {
  private sub: Subscription;


  constructor(
    private store: Store<any>, 
    private router: Router
  ) { }

  start() {
    this.sub = this.store
        .select(QuizSelectors.selectIsDone)
        .subscribe(val => this.onIsDoneChanged(val));
  }

  dispose() {
    this.sub.unsubscribe();
  }

  getRouteForState(isDone: boolean): UrlTree {
    if (isDone) return this.router.createUrlTree(['done']);

    return this.router.createUrlTree(['question']);
  }

  private onIsDoneChanged(isDone: boolean) {
    const route = this.getRouteForState(isDone);
    this.router.navigateByUrl(route);
  }
}
