import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListQuotesComponent } from './list-quotes/list-quotes.component';
import { RegisterQuotesComponent } from './register-quotes/register-quotes.component';
import { RegisterProductsComponent } from './register-products/register-products.component';


@NgModule({
  declarations: [
    AppComponent,
    ListQuotesComponent,
    RegisterQuotesComponent,
    RegisterProductsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
