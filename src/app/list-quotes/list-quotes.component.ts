import { Component, OnInit } from '@angular/core';
import { Quotation } from '../service/quotation';
import { QuotationService } from '../service/quotes.service';

@Component({
  selector: 'app-list-quotes',
  templateUrl: './list-quotes.component.html',
  providers: [QuotationService],
  styleUrls: ['./list-quotes.component.css']
})
export class ListQuotesComponent implements OnInit {
  quotations:  Quotation[] = [];

  constructor(private quotationService: QuotationService) {}

  ngOnInit() {
    this.getQuotations();
  }

  getQuotations(): void {
    this.quotationService.getQuotations()
      .subscribe(quotations => (this.quotations = quotations));
  }

}
