import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesPrincipalComponent } from './pages-principal/pages-principal.component';

const routes: Routes = [
  {
    path:'',component:PagesPrincipalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
