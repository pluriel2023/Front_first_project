import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'configuration',
    loadChildren: () => import('./modules/configuration/configuration.module').then(m => m.ConfigurationModule)
  },
  {
    path: 'task',
    loadChildren: () => import('./modules/task/task.module').then(m => m.TaskModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
