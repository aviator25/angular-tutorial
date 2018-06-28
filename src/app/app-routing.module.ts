import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, Routes }  from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
{ path: 'products' , component: ProductsComponent},
{ path: 'dashboard' , component: DashboardComponent},
{path: '**', component: DashboardComponent}];
 

@NgModule({
  imports: [
    CommonModule,
   [RouterModule.forRoot(routes)]
  ],
   exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
