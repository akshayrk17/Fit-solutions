import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { RouterGuardService } from './core/services/router-guard.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path: '',
    component: LoginComponent,
    // canActivate : [RouterGuardService],
  },
  {
    path: 'home',
    component: HomeComponent,
    // canActivate : [RouterGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
