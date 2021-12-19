import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoModule } from 'src/app/images/logo/logo.module';
import { MenuComponent } from './menu.component';
import { UserModule } from '../user/user.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    LogoModule,
    UserModule
  ],
  exports: [MenuComponent]
})
export class MenuModule { }
