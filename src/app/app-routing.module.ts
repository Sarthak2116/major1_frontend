import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PredictComponent } from './predict/predict.component';
import { BoughtComponent } from './bought/bought.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'
import { AuthGuard } from './shared/auth.guard';
import { MarketComponent } from './market/market.component';

const routes: Routes = [
  {
    path: 'bought',
    component: BoughtComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'predict',
    component: PredictComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'market',
    component: MarketComponent
  },
  { path: '**',
  component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
