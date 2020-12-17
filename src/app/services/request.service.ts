import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private apiEndpoint = 'https://stage-api-ubertickets.cloudstaff.com/v1';

  constructor(private httpClient: HttpClient) { }

  get(url = '', params = []): Observable<any> {
    return this.httpClient.get(this.apiEndpoint + url);
  }

  post(url = '', data: any, params = [], headers = []): Observable<any> {
    return this.httpClient.post(this.apiEndpoint + url, data);
  }

  put(url = '', data: any, params = [], headers = []): Observable<any> {
    return this.httpClient.put(this.apiEndpoint + url, data);
  }

  delete(url = '', params = []): Observable<any> {
    return this.httpClient.delete(this.apiEndpoint + url);
  }
}
