import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterModule } from './register/register.module';

@NgModule({
  declarations: [PageNotFoundComponent, HomeComponent, LoginComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    RegisterModule
  ]
})
export class PagesModule { }
