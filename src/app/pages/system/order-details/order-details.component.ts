import { OrderService } from './../../../order.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
})
export class OrderDetailsComponent implements OnInit {
  orderDetail: any = null;
  status: number = 0;
  trackcode: string = '';
  selectdelivery: any = null;
  Note: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private orderService: OrderService
  ) {}

  async ngOnInit() {
    let ordercode = this.activatedRoute.snapshot.paramMap.get('ordercode');
    console.log('ordercode', ordercode);
    try {
      let res = await this.orderService.getOrderByCode(ordercode || '{}');

      console.log('order', res);
      this.orderDetail = res;
      this.status = this.orderDetail.status;
      this.Note = this.orderDetail.note;
    } catch (err) {}
  }
}
