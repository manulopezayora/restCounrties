import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/shared/header/header.component';
import { SearchInputComponent } from './home/components/search-input/search-input.component';
import { FormsModule } from '@angular/forms';
import { CountryListComponent } from './home/pages/country-list/country-list.component';
import { CountryDetailComponent } from './home/pages/country-detail/country-detail.component';
import { CardComponent } from './home/components/card/card.component';
import { FilterInputComponent } from './home/components/filter-input/filter-input.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchInputComponent,
    CountryListComponent,
    CountryDetailComponent,
    CardComponent,
    FilterInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
