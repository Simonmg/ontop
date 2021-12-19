import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'src/app/layout/panel/panel.module';
import { SearchModule } from 'src/app/components/search/search.module';
import { ContractorFilterModule } from 'src/app/components/contractor-filter/contractor-filter.module';
import { TableModule } from 'src/app/components/table/table.module';
import { FloatMenuModule } from 'src/app/components/float-menu/float-menu.module';
import { ContractsComponent } from './contracts.component';

@NgModule({
  declarations: [ContractsComponent],
  imports: [
    CommonModule,
    PanelModule,
    SearchModule,
    ContractorFilterModule,
    TableModule,
    FloatMenuModule
  ],
  exports: [ContractsComponent]
})
export class ContractsModule { }
