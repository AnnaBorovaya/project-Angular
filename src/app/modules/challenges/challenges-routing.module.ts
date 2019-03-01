import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChallengesPageComponent } from './components/challenges-page/challenges-page.component';

const routes: Routes = [
  { path: 'challenge-page', component: ChallengesPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ChallengesRoutingModule { }



