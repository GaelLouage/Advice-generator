import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RootObject } from '../models/root-object';


@Injectable({
  providedIn: 'root'
})
export class AdviceService {
// advice api
readonly baseUrl = "https://api.adviceslip.com/advice";

  constructor(private http: HttpClient) { }

  public getAdvice():Observable<RootObject> {
    return this.http.get<RootObject>(this.baseUrl);
  }

}
