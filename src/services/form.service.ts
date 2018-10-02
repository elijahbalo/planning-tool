import { Injectable } from '@angular/core';
//import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class FormService {
  // Resolve HTTP using the constructor
  constructor(private http: Http) {}
  // private instance variable to hold base url
  private Url = '/form-util/';

  sendFormData(): Observable<any> {
    //pass the parameter to the data properties
    let data = {
      subject: 'Test email',
      from_name: 'History Museum',
      from_email: 'elijah.balogun@museedelhistoire.ca',
      to: 'pierre.mageau@museedelhistoire.ca',
      message: 'This is to test that the form email service works.',
      AKEY: 'uK21MLM0A2'
    };
    let body = JSON.stringify(data);

    return (
      this.http
        .post(this.Url, body)
        // call json to the response object
        .pipe(map(res => res.json()))
        // handle errors if any
        .pipe(
          catchError((error: any) =>
            Observable.throw(error.json().error || 'Server error')
          )
        )
    );
  }
}
