import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Quotation } from './quotation';
import { Product } from './product';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

/** POST ROUTES */
const postQuotationURL = 'http://localhost:10000/v1/quotations/save';
const postProductURL = 'http://localhost:10000/v1/products/save';

/** GET ROUTES */
const getQuotationURL = 'http://localhost:10000/v1/quotations/findAll';

@Injectable()
export class BackendService {
    
    constructor(private http: HttpClient) { }

    /** POST: add a new quotation to the database */
    addQuotation(quotation: Quotation): Observable<Quotation> {
        return this.http.post<Quotation>(postQuotationURL, quotation, httpOptions);
    }

    /** POST: add a new product to the database */
    addProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(postProductURL, product, httpOptions);
    }

    /** GET: list quotations from the database */
    getQuotations(): Observable<Quotation[]> {
        return this.http.get<Quotation[]>(getQuotationURL);
    }

}