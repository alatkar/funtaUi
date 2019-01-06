import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetsComponent } from './pets/pets.component';
import { ServicesComponent } from './services/services.component';
import { NgoComponent } from './ngo/ngo.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: 'register/pets', component: PetsComponent },
  { path: 'register/services', component: ServicesComponent },
  { path: 'register/ngo', component: NgoComponent },
  { path: 'register/products', component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
