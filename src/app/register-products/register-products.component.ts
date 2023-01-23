import { Component } from '@angular/core';
import { Product } from '../service/product';
import { QuotationService } from '../service/quotes.service';

@Component({
  selector: 'app-register-products',
  templateUrl: './register-products.component.html',
  providers: [QuotationService],
  styleUrls: ['./register-products.component.css']
})
export class RegisterProductsComponent {

  newProduct : Product = {} as Product;

  constructor(private quotationService: QuotationService) {}

  addProduct(): void {
    console.log("cliquei para salvar");
    this.quotationService
      .addProduct(this.newProduct)
      .subscribe();
  }

}
