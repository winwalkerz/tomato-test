import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { FormsModule } from '@angular/forms';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';


@NgModule({
  declarations: [SystemComponent],
  imports: [
    CommonModule,
    SystemRoutingModule,
    NzLayoutModule,
    NzGridModule,
    NzSelectModule,
    FormsModule,
    NzButtonModule,
    NzMenuModule,
    NzDividerModule,
    NzSwitchModule,
    NzDropDownModule,
    NzIconModule,
    NzDrawerModule,
    NzEmptyModule,
    NzBreadCrumbModule
  ]
})
export class SystemModule { }
