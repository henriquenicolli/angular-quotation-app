import { Component } from '@angular/core';

@Component({
  selector: 'app-list-quotes',
  templateUrl: './list-quotes.component.html',
  styleUrls: ['./list-quotes.component.css']
})
export class ListQuotesComponent {
  quotes = [
      { companyName: 'Empresa ABCD', quoteName: 'Produtos de Limpeza', quoteExpirationDate: '01/12/1992' },
      { companyName: 'Empresa XPTO', quoteName: 'Ferramentas de monitoramento', quoteExpirationDate: '01/12/1992' },
      { companyName: 'Empresa TRD LTDA.', quoteName: 'Sensores de presenca', quoteExpirationDate: '01/12/1992' },
      { companyName: 'Empresa XXJP', quoteName: 'Pneus 225/50 R17 Run Flat', quoteExpirationDate: '01/12/1992' },
      { companyName: 'Empresa KKTfX', quoteName: 'Servico de Captura de video', quoteExpirationDate: '01/12/1992' },
      { companyName: 'Empresa KKTfX', quoteName: 'Servico de Captura de video', quoteExpirationDate: '01/12/1992' },
      { companyName: 'Empresa KKTfX', quoteName: 'Servico de Captura de video', quoteExpirationDate: '01/12/1992' },
  ];
}
