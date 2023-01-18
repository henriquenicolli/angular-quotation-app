import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Quotation } from './quotation';


@Injectable()
export class QuotationService {
      
      getQuotationURL = 'http://localhost:10000/v1/quotations/findAll';  // URL to web api

      constructor(private http: HttpClient) { }

      getQuotations() : Observable<Quotation[]> {
            return this.http.get<Quotation[]>(this.getQuotationURL);

      }
}