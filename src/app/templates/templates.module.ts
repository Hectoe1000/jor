import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatesRoutingModule } from './templates-routing.module';
import { TemplateHeaderComponent } from './template-header/template-header.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TemplatesRoutingModule,
    TemplateHeaderComponent
  ],
  exports:[
    TemplateHeaderComponent
  ]
})
export class TemplatesModule { }
