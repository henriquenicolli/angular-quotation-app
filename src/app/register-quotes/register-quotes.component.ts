import { Component, OnInit } from '@angular/core';
import { Quotation } from '../service/quotation';
import { QuotationService } from '../service/quotes.service';

@Component({
  selector: 'app-register-quotes',
  templateUrl: './register-quotes.component.html',
  providers: [QuotationService],
  styleUrls: ['./register-quotes.component.css']
})
export class RegisterQuotesComponent {

  newQuotation: Quotation = { } as Quotation;

  constructor(private quotationService: QuotationService) {}

  addQuotation(): void {
    console.log("cliquei para salvar");
    this.quotationService
      .addQuotation(this.newQuotation)
      .subscribe();
  }

}
