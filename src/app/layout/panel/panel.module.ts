import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuModule } from 'src/app/components/menu/menu.module';

import { UserModule } from 'src/app/components/user/user.module';
import { PanelComponent } from './panel.component';

@NgModule({
  declarations: [PanelComponent],
  imports: [
    CommonModule,
    MenuModule,
    UserModule
  ],
  exports: [PanelComponent]
})
export class PanelModule { }
