import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(private http: HttpClient) {}

  private createHeader(headers?: HttpHeaders): HttpHeaders {
    return headers?.append('Content-Type', 'application/json');
  }

  get(url: string, options?: HttpHeaders) {
    const headers = this.createHeader(options);
    return this.http.get(url, { headers: headers, observe: 'response' });
  }

  put(url: string, data: any, options?: HttpHeaders) {
    return this.http.put(url, data, {
      headers: this.createHeader(options),
      observe: 'response',
    });
  }
}
