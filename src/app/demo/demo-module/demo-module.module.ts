import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoModuleRoutingModule } from './demo-module-routing.module';
import { DemoComponent } from '../demo.component';


@NgModule({
  declarations: [DemoComponent],
  imports: [
    CommonModule,
    DemoModuleRoutingModule
  ]
})
export class DemoModuleModule { }
