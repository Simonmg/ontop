import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractsModule } from './contracts.module';
import { ContractsComponent } from './contracts.component';

const routes: Routes = [
  {
    path: '',
    component: ContractsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ContractsModule
  ],
  exports: [RouterModule]
})
export class ContractsRoutingModule { }
