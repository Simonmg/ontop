import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'src/app/images/avatar/avatar.module';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    AvatarModule
  ],
  exports: [UserComponent]
})
export class UserModule { }
