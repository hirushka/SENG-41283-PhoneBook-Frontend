import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { HomeComponent } from './components/home/home.component';
import { AuthenticationGuard } from 'microsoft-adal-angular6';

const routes: Routes = [

  {path: 'login', component: LoginpageComponent},
  {path: 'id_token',redirectTo: '/home' ,pathMatch: 'full'},
  {path: '',redirectTo: '/login' ,pathMatch: 'full'},
  {path: 'home', component: HomeComponent,canActivate: [AuthenticationGuard]},
  {path: 'test', component: HomeComponent},
  {path: '**', component: LoginpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }