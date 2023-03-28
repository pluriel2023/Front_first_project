import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ConfigurationComponent } from './configuration.component';
import { FirstConfigurationComponent } from './views/first-configuration/first-configuration.component';
import { MaterialModule } from 'src/app/material/material';


@NgModule({
  declarations: [
    ConfigurationComponent,
    FirstConfigurationComponent
  ],
  imports: [
    CommonModule,
    ConfigurationRoutingModule,
    MaterialModule
  ]
})
export class ConfigurationModule { }
