import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar-observables';
import { ToastaModule } from 'ngx-toasta';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    SlimLoadingBarModule.forRoot(),
    ToastaModule.forRoot(),
  ],
  exports: [
    BrowserModule,
    SlimLoadingBarModule,
    ToastaModule
  ]
})
export class CoreModule { }
