import { OrderService } from './../../../order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oders',
  templateUrl: './oders.component.html',
  styleUrls: ['./oders.component.css'],
})
export class OdersComponent implements OnInit {
  model_search = {
    
    ordercode: '',
    
  };
  listorder: any[] = [];

  constructor(private oderservice: OrderService) {}

  ngOnInit(): void {
    this.post();
  }

  post() {
    this.oderservice.post(this.model_search).then((res: any) => {
      this.listorder = res.data;
      // console.log(this.listorder);
    });
  }
}
