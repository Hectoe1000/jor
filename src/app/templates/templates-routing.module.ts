import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateHeaderComponent } from './template-header/template-header.component';

const routes: Routes = [
  {
    path:'',component:TemplateHeaderComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplatesRoutingModule { }