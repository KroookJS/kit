import { Routes } from '@angular/router';
import { HomeTestComponent} from './components/home/home.component';
import {SurveyListComponent} from './components/survey-list/survey-list.component';
import {SurveyComponent} from './components/survey/survey.component';
import {ResultsComponent} from './components/results/results.component';
import {AppComponent} from './app.component';


export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'hometest', component: HomeTestComponent },
  { path: 'surveys', component: SurveyListComponent },
  { path: 'survey/:id', component: SurveyComponent },
  { path: 'results', component: ResultsComponent },
];

