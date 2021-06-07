import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(private http: HttpClient) {}

  private createHeader(headers?: HttpHeaders): HttpHeaders {
    headers = headers?.append('Content-Type', 'application/json');
    headers = headers?.append('Access-Control-Allow-Origin', '*');
    headers = headers?.append(
      'Access-Control-Allow-Methods',
      'GET, POST, PATCH, PUT, DELETE, OPTIONS'
    );
    headers = headers?.append(
      'Access-Control-Allow-Headers',
      'Origin, Content-Type, X-Auth-Token,X-Requested-With, Accept"'
    );

    return headers;
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
