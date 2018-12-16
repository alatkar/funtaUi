import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InputComponent } from './HtmlTags/input/input.component';

@NgModule({
  declarations: [NavbarComponent, SidebarComponent, InputComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [

      ]
    };
  }
}
