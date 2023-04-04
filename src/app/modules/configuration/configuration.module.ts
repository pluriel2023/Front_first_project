import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ConfigurationComponent } from './configuration.component';
import { FirstConfigurationComponent } from './views/first-configuration/first-configuration.component';
import { MaterialModule } from 'src/app/material/material';
import { FormPostComponent } from './views/first-configuration/components/form-post/form-post.component';
import { FormAddPostComponent } from './views/first-configuration/components/form-add-post/form-add-post.component';
import { FormUpdatePostComponent } from './views/first-configuration/components/form-update-post/form-update-post.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ConfigurationComponent,
    FirstConfigurationComponent,
    FormPostComponent,
    FormAddPostComponent,
    FormUpdatePostComponent,
    HelloWorldComponent
  ],
  imports: [
    CommonModule,
    ConfigurationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatIconModule,
  ]
})
export class ConfigurationModule { }
