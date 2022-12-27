import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListQuotesComponent } from './list-quotes/list-quotes.component';
import { RegisterQuotesComponent } from './register-quotes/register-quotes.component';


@NgModule({
  declarations: [
    AppComponent,
    ListQuotesComponent,
    RegisterQuotesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
