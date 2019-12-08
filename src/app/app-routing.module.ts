import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './component/homepage/homepage.component';
import {LoginComponent} from './component/login/login.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
	{path:'login',component:LoginComponent},
  { path:'', redirectTo:'login', pathMatch:'full'},
  { path: '**', redirectTo: 'hompage' },
  {path:'homepage',component:HomepageComponent,
  children: [
    {
      path: 'dashboard',
      loadChildren: './component/dashboard/dashboard.module#DashboardcontentModule',
    },
    {
      path: 'aboutus',
      loadChildren: './component/aboutus/aboutus.module#AboutUscontentModule',
    },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
