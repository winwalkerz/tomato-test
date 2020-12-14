import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OdersRoutingModule } from './oders-routing.module';
import { OdersComponent } from './oders.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [OdersComponent],
  imports: [CommonModule, OdersRoutingModule, NzGridModule, NzInputModule,NzButtonModule],
})
export class OdersModule {}
