import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Quotation } from './quotation';
import { Product } from './product';

const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
};


@Injectable()
export class QuotationService {
      
      postQuotationURL = 'http://localhost:10000/v1/quotations/save';  
      postProductURL = 'http://localhost:10000/v1/products/save';

      getQuotationURL = 'http://localhost:10000/v1/quotations/findAll'; 

      constructor(private http: HttpClient) { }

      /** POST: add a new quotation to the database */
      addQuotation(quotation: Quotation): Observable<Quotation> {
            console.log("chamando server");
            return this.http.post<Quotation>(this.postQuotationURL, quotation, httpOptions);
      }

      /** POST: add a new product to the database */
      addProduct(product: Product): Observable<Product> {
            console.log("chamando server");
            return this.http.post<Product>(this.postProductURL, product, httpOptions);
      }
      
      /** GET: list quotations from the database */
      getQuotations() : Observable<Quotation[]> {
            return this.http.get<Quotation[]>(this.getQuotationURL);
      }

    
}