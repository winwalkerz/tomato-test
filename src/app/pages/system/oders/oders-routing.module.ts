import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OdersComponent } from './oders.component';

const routes: Routes = [{ path: '', component: OdersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OdersRoutingModule { }
