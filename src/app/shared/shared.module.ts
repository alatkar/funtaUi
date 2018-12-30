import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InputComponent } from './HtmlTags/input/input.component';
import { NotificationComponent } from './notification/notification.component';
import { ListOfPetsComponent } from './list-of-pets/list-of-pets.component';
import { ListOfFriendComponent } from './list-of-friend/list-of-friend.component';
import { PostComponent } from './post/post.component';
import { HeaderPostComponent } from './header-post/header-post.component';
import { FooterPostComponent } from './footer-post/footer-post.component';
import { CommentComponent } from './comment/comment.component';
import { LikeComponent } from './like/like.component';
import { ShareComponent } from './share/share.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    InputComponent,
    NotificationComponent,
    ListOfPetsComponent,
    ListOfFriendComponent,
    PostComponent,
    HeaderPostComponent,
    FooterPostComponent,
    CommentComponent,
    LikeComponent,
    ShareComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    ListOfPetsComponent,
    ListOfFriendComponent,
    PostComponent
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
