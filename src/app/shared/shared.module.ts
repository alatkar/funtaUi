import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InputComponent } from './HtmlTags/input/input.component';
import { NotificationComponent } from './notification/notification.component';
import { ListOfPetsComponent } from './list-of-pets/list-of-pets.component';
import { ListOfFriendComponent } from './list-of-friend/list-of-friend.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    InputComponent,
    NotificationComponent,
    ListOfPetsComponent,
    ListOfFriendComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    ListOfPetsComponent,
    ListOfFriendComponent
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
