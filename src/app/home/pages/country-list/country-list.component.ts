import { Component, OnInit } from '@angular/core';
import { lastValueFrom, take } from 'rxjs';
import { RESTCountries } from '../../interfaces/RESTCountries.interface';
import { RestCountriesService } from '../../services/restCountries/rest-countries.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  public countriesList: RESTCountries[];

  constructor(private restCountriesService: RestCountriesService) {
    this.countriesList = [];
  }

  ngOnInit(): void {
    this.initialize();
  }

  public searchCountry(event: any) {
    console.log(event)
  }

  private async initialize(): Promise<void> {
    this.countriesList = await this.getAllCountries();
  }

  private async getAllCountries(): Promise<RESTCountries[]> {
    const source$ = this.restCountriesService.getAllCountries().pipe(take(1));
    const allCountries: RESTCountries[] = await lastValueFrom(source$);
    return allCountries;
  }

}
