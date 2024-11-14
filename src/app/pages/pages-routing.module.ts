import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesPrincipalComponent } from './pages-principal/pages-principal.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path:'',component:PagesPrincipalComponent,

    
  },
  {
    path:'menu',component:MenuComponent
  },
  {
    path:'detalles',component:MenuComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
