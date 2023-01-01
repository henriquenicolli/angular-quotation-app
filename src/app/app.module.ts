import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ListQuotesComponent } from './list-quotes/list-quotes.component';
import { RegisterQuotesComponent } from './register-quotes/register-quotes.component';
import { RegisterProductsComponent } from './register-products/register-products.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialExampleModule } from './material.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'listaCotacoes', component: ListQuotesComponent },
  { path: 'cadastrarCotacao', component: RegisterQuotesComponent },
  { path: 'cadastrarProduto', component: RegisterProductsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListQuotesComponent,
    RegisterQuotesComponent,
    RegisterProductsComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    HttpClientModule,
    MaterialExampleModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
