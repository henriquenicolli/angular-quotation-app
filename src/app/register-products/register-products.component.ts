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
    showMsg: boolean = false;

    constructor(private backendService: BackendService) { }

    addProduct(): void {
        this.backendService
            .addProduct(this.newProduct)
            .subscribe({
                next: async () => {
                    this.showMsg = true;
                    await delay(1500);
                    this.showMsg = false;
                },
                error: (erro) => {
                    alert("Nao foi possivel salvar o Produto!");
                    console.log(erro)
                }
            });
    }
}

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
