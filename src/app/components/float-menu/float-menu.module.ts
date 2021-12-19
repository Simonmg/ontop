import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FloatMenuComponent } from './float-menu.component';

@NgModule({
  declarations: [FloatMenuComponent],
  imports: [
    CommonModule
  ],
  exports: [FloatMenuComponent]
})
export class FloatMenuModule { }
