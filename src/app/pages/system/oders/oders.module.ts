import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';

import { OdersRoutingModule } from './oders-routing.module';
import { OdersComponent } from './oders.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

@NgModule({
  declarations: [OdersComponent],
  imports: [
    CommonModule,
    OdersRoutingModule,
    NzGridModule,
    NzInputModule,
    NzButtonModule,
    NzDatePickerModule,
    NzDropDownModule,
    NzIconModule,
    NzTabsModule,
    NzSelectModule,
    FormsModule,
    NzFormModule,
    NzTableModule,
    NzTagModule,
    NzToolTipModule,
    NzPopoverModule,
    NzPaginationModule,
  ],
})
export class OdersModule {}
