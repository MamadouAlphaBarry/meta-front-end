import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule) },
  { path: 'jobs', loadChildren: () => import('./modules/jobs/jobs.module').then(m => m.JobsModule) },
  { path: 'resources', loadChildren: () => import('./modules/resources/resources.module').then(m => m.ResourcesModule) },
  { path: 'reporting', loadChildren: () => import('./modules/reporting/reporting.module').then(m => m.ReportingModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
