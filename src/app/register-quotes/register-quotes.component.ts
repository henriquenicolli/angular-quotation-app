import { Component, OnInit } from '@angular/core';
import { Quotation } from '../service/quotation';
import { BackendService } from '../service/backend.service';

@Component({
    selector: 'app-register-quotes',
    templateUrl: './register-quotes.component.html',
    providers: [BackendService],
    styleUrls: ['./register-quotes.component.css']
})
export class RegisterQuotesComponent {

    newQuotation: Quotation = {} as Quotation;

    constructor(private backendService: BackendService) { }

    addQuotation(): void {
        this.backendService
            .addQuotation(this.newQuotation)
            .subscribe();
    }
}
