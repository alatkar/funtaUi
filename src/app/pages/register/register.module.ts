import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { PetsComponent } from './pets/pets.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { NgoComponent } from './ngo/ngo.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [PetsComponent, ServicesComponent, ProductsComponent, NgoComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    SharedModule
  ]
})
export class RegisterModule { }
