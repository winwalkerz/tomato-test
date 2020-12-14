import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';

const api_url = 'https://api.ketshoptest.com/api/v1';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private hhtp: HttpClient) {}

  login(data: any) {
    return this.hhtp
      .post(`${api_url}/login/web`, {
        domain: 'uat.ketshoptest.com',
        username: data.username,
        password: data.password,
      })
      .toPromise();
  }

  // post(data: any) {
  //   let _token = localStorage.getItem('token');
  //   let token_json = JSON.parse(_token|| '{}');
  //   let _header = {
  //     headers: {
  //       authorization: `Bearer ${
  //         token_json.access_token
  //       }`,
  //     },
  //   };
  //   return this.hhtp.post(`${api_url}/order/search`, data, _header).toPromise();
  // }
}
