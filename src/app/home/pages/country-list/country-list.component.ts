import { Component, OnInit } from '@angular/core';
import { lastValueFrom, take } from 'rxjs';
import { Region } from '../../enums/Region.enum';
import { RESTCountries } from '../../interfaces/RESTCountries.interface';
import { RestCountriesService } from '../../services/restCountries/rest-countries.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  public countriesList: RESTCountries[];
  public regionComboValues: string[];
  private _allCountriesList: RESTCountries[];

  constructor(private _restCountriesService: RestCountriesService) {
    this.countriesList = [];
    this.regionComboValues = [];
    this._allCountriesList = [];
  }

  ngOnInit(): void {
    this._initialize();
  }

  public searchCountry(value: any) {
    this.countriesList = this._allCountriesList.filter((element) => element.name.toLowerCase().includes(value));
  }

  public selectedRegion(value: any): void {
    this.countriesList = value === 'clear' ? [...this._allCountriesList] : this._allCountriesList.filter((element) => element.region === value);
  }

  private async _initialize(): Promise<void> {
    this._allCountriesList = await this._getAllCountries();
    this.countriesList = [...this._allCountriesList];
    this.getRegionsComboValues();
  }

  private async _getAllCountries(): Promise<RESTCountries[]> {
    const source$ = this._restCountriesService.getAllCountries().pipe(take(1));
    const allCountries: RESTCountries[] = await lastValueFrom(source$);
    return allCountries;
  }

  private getRegionsComboValues(): void {
    this.regionComboValues = Object.values(Region);
  }

}
