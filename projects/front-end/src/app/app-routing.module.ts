import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  { path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule) , canActivate : [AuthGuard], data : {roles :['ADMIN']}},
  { path: 'jobs', loadChildren: () => import('./modules/jobs/jobs.module').then(m => m.JobsModule) , canActivate : [AuthGuard], data : {roles :['ADMIN']}},
  { path: 'resources', loadChildren: () => import('./modules/resources/resources.module').then(m => m.ResourcesModule) , canActivate : [AuthGuard], data : {roles :['ADMIN']}},
  { path: 'reporting', loadChildren: () => import('./modules/reporting/reporting.module').then(m => m.ReportingModule), canActivate : [AuthGuard], data : {roles :['ADMIN']} },
  {path:'customers',loadChildren:()=>import('./modules/customer/customer.module').then(m=>m.CustomerModule), canActivate : [AuthGuard], data : {roles :['ADMIN']}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
