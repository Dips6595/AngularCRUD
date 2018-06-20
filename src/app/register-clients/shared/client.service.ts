import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Client } from './client.model';

@Injectable()
export class ClientService {
selectedClient: Client;

constructor(private http: Http) { }

  postClient(cnt: Client) {
    var body = JSON.stringify(cnt);
    var headerOption = new Headers({'Content-Type': 'application/json'});
    var requestOption = new RequestOptions({method: RequestMethod.Post, headers: headerOption });
    return this.http.post('https://jobs.tcet.com/api/Clients/PostClients', body, requestOption).map(x => x.json());
  }
}
