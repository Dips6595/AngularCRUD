import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';

import { Employer } from './employer.model';

@Injectable()
export class EmployerService {
  selectedEmployer: Employer;

  constructor(private http: Http) { }

  postEmployer(emp: Employer) {
    var body = JSON.stringify(emp);
    var headerOption = new Headers({ 'Content-Type' : 'application/json'});
    var requestOption = new RequestOptions( {method: RequestMethod.Post, headers: headerOption });
    return this.http.post('https://jobs.tcet.com/api/Employer/PostEmployer', body, requestOption).map(y => y.json())
    .catch(this.handleError);
    }

    handleError(error: Response) {
      console.error(error);
      return Observable.throw(error);
    }
}
