import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

const apiUrl = 'https://openlibrary.org/';

@Injectable({
  providedIn: 'root'
})
export class CommonApiService {

  constructor(public _httpClient: HttpClient) { }

  private data$ = new BehaviorSubject<any>([]);
  data = this.data$.asObservable();


  public setData(data: any){
    this.data$.next(data);
    console.log('--', this.data$)
  }


  commonApiService(type: string, api: string, postdata: any = '') {
    if (type == 'post') {
      return new Promise((resolve, reject) => {
        this._httpClient.post(apiUrl + api, postdata,).subscribe(response => {
          resolve(response);
        }, err => {
          reject(err);
        })
      });
    } else {
      return new Promise((resolve, reject) => {
        this._httpClient.get(apiUrl + api + postdata).subscribe((response) => {
          resolve(response);
        }, err => {
          reject(err);
        });
      });
    }
  }
}
