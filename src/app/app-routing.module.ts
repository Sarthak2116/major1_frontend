import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PredictComponent } from './predict/predict.component';
import { BoughtComponent } from './bought/bought.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'bought',
    component: BoughtComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'predict',
    component: PredictComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
