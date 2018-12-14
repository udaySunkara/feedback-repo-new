import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FeedbackWrapperComponent } from './feedback-wrapper/feedback-wrapper.component';
import { FeedbackSubmitStatusComponent } from './feedback-submit-status/feedback-submit-status.component';

const appRoutes: Routes = [
  { path: 'feedback', component: FeedbackWrapperComponent },
  { path: 'feedback-status', component: FeedbackSubmitStatusComponent },
  { path: '',
    redirectTo: '/feedback',
    pathMatch: 'full'
  },
  { path: '**', component: FeedbackFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FeedbackFormComponent,
    FeedbackWrapperComponent,
    FeedbackSubmitStatusComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes,
      { enableTracing: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
