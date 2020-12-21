import { OrderService } from './../../../order.service';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-oders',
  templateUrl: './oders.component.html',
  styleUrls: ['./oders.component.css'],
})
export class OdersComponent implements OnInit {
  model_search = {
    ordercode: '',
    channel: '',
    name: '',
    lastname: '',
    order_date: '',
    page: '',
    username: '',
    paymenttype: '',
    status: '',
    created_by: '',
    user_id: '',
    bill_name: '',
    bill_lastname: '',
  };
  // paymenttype = [
  //   {
  //     paymenttype: {
  //       id: '',
  //     },
  //   },
  // ];

  listorder: any[] = [];
  count: any;
  searchText: string = '';
  constructor(private oderservice: OrderService) {}

  ngOnInit(): void {
    this.post();
  }

  click($event: any) {
    this.model_search.page = $event;
    this.post();
  }
  changeFilter($event: any) {
    this.oderservice.post(this.model_search).then((res: any) => {
      this.listorder = res.data;
      this.count = res.count;
      console.log(this.count);
    });
  }
  // changeFilter2($event: any) {
  //   this.oderservice.post(this.paymenttype).then((res: any) => {
  //     this.listorder = res.data;
  //     this.count = res.count;
  //     console.log(this.count);
  //   });
  // }
  post() {
    this.oderservice.post(this.model_search).then((res: any) => {
      this.listorder = res.data;
      this.count = res.count;
      console.log(this.count);
    });
  }

  openwindow(ordercode: any) {
    window.open(`/order-details/${ordercode}`, '_blank',"width=1075,height=700");
  }
}
