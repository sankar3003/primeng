import { map, catchError } from 'rxjs/operators';
import { Config } from './../@shared/@models/config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    //private config:Config
  ) { }


  authenticate(req) {
    return this.http.post(Config.domain + `/api/v1/users/authenticate`, req)
  }

}
