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
  private _allCountriesList: RESTCountries[];

  constructor(private _restCountriesService: RestCountriesService) {
    this.countriesList = [];
    this._allCountriesList = [];
  }

  ngOnInit(): void {
    this._initialize();
  }

  public searchCountry(event: any) {
    this.countriesList = this._allCountriesList.filter((element) => element.name.toLowerCase().includes(event));
    console.log(event)
  }

  private async _initialize(): Promise<void> {
    this._allCountriesList = await this._getAllCountries();
    this.countriesList = [...this._allCountriesList];
  }

  private async _getAllCountries(): Promise<RESTCountries[]> {
    const source$ = this._restCountriesService.getAllCountries().pipe(take(1));
    const allCountries: RESTCountries[] = await lastValueFrom(source$);
    return allCountries;
  }

}
