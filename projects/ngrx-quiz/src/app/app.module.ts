import { AppMaterialModule } from './app-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressComponent } from './components/progress/progress.component';
import { QuestionPresenterComponent } from './components/question-presenter/question-presenter.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressComponent,
    QuestionPresenterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
