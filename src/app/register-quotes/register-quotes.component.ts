import { Component, OnInit } from '@angular/core';
import { Quotation } from '../service/quotation';
import { BackendService } from '../service/backend.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register-quotes',
    templateUrl: './register-quotes.component.html',
    providers: [BackendService],
    styleUrls: ['./register-quotes.component.css']
})
export class RegisterQuotesComponent {

    newQuotation: Quotation = {} as Quotation;

    constructor(private backendService: BackendService, private router: Router) { }

    addQuotation(): void {
        this.backendService
            .addQuotation(this.newQuotation)
            .subscribe({
                next: () => {
                    this.router.navigate(['listaCotacoes'])
                },
                error: (erro) => {
                    alert("Nao foi possivel salvar a cotacao!");
                    console.log(erro)
                }
            });
    }
}
