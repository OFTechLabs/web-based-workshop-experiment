import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'joke', component: JokeComponent }
];
