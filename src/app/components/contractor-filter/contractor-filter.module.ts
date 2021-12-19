import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractorFilterComponent } from './contractor-filter.component';

@NgModule({
  declarations: [ContractorFilterComponent],
  imports: [
    CommonModule
  ],
  exports: [ContractorFilterComponent]
})
export class ContractorFilterModule { }
