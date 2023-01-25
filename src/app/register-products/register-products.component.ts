import { Component } from '@angular/core';
import { Product } from '../service/product';
import { BackendService } from '../service/backend.service';

@Component({
    selector: 'app-register-products',
    templateUrl: './register-products.component.html',
    providers: [BackendService],
    styleUrls: ['./register-products.component.css']
})
export class RegisterProductsComponent {

    newProduct: Product = {} as Product;

    constructor(private backendService: BackendService) { }

    addProduct(): void {
        this.backendService
            .addProduct(this.newProduct)
            .subscribe();
    }

}
