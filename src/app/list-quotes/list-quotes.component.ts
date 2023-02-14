import { Component, OnInit } from '@angular/core';
import { Quotation } from '../service/quotation';
import { BackendService } from '../service/backend.service';

@Component({
    selector: 'app-list-quotes',
    templateUrl: './list-quotes.component.html',
    providers: [BackendService],
    styleUrls: ['./list-quotes.component.css']
})
export class ListQuotesComponent implements OnInit {
    quotations: Quotation[] = [];
    selectedQuote = {} as Quotation;
    display = "none";

    constructor(private backendService: BackendService) { }

    ngOnInit() {
        this.getQuotations();
    }

    getQuotations(): void {
        this.backendService.getQuotations()
            .subscribe({
                next: (quotation) => {
                    this.quotations = quotation
                },
                error: (erro) => {
                    alert("Nao foi possivel conectar no servidor");
                    console.log(erro)
                }
            }
            );
    }

    openModal(quote: Quotation) {
        this.display = "block";
        this.selectedQuote = quote;
    }

    onCloseHandled() {
        this.display = "none";
    }

}
