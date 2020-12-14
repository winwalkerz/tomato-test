import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystemComponent } from './system.component';

const routes: Routes = [
  {
    path: '',
    component: SystemComponent,
    children: [   //link to oders!!
      { path: '', redirectTo: 'orders', pathMatch: 'full' },
      {
        path: 'orders',
        loadChildren: () =>
          import('./oders/oders.module').then((m) => m.OdersModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemRoutingModule {}
