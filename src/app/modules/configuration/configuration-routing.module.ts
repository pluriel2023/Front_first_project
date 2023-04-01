import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationComponent } from './configuration.component';
import { FormAddPostComponent } from './views/first-configuration/components/form-add-post/form-add-post.component';
import { FirstConfigurationComponent } from './views/first-configuration/first-configuration.component';

const routes: Routes = [
  {
    path: '',
    component: ConfigurationComponent,
    children: [
      {
        path: "first",
        component: FirstConfigurationComponent,
      },
      {
        path: "first/add",
        component: FormAddPostComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }