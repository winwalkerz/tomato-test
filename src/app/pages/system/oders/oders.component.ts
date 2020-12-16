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
    username:'',
    paymenttype:'',
    
  };
  listorder: any[] = [];
  count: any;
  constructor(private oderservice: OrderService) {}

  ngOnInit(): void {
    this.post();
  }

  click($event:any) {
    this.model_search.page = $event;
    this.post();
  }
  post() {
    this.oderservice.post(this.model_search).then((res: any) => {
      this.listorder = res.data;
      this.count = res.count;
      console.log(this.count);
    });
  }
}
