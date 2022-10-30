import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom, take } from 'rxjs';
import { RESTCountries } from '../../interfaces/RESTCountries.interface';
import { RestCountriesService } from '../../services/restCountries/rest-countries.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {

  public countryDetail!: RESTCountries;

  constructor(
    private _restCountriesService: RestCountriesService,
    private _route: ActivatedRoute
    ) {
  }

  ngOnInit(): void {
    const alpha3Code: string = this._route.snapshot.paramMap.get('alpha3Code') || '';
    this._initialize(alpha3Code);
  }


  private async _initialize(alpha3Code: string): Promise<void> {
    this.countryDetail = await this._getCountryDetail(alpha3Code);
  }

  private async _getCountryDetail(alpha3Code: string): Promise<RESTCountries> {
    const source$ = this._restCountriesService.getCountryDetail(alpha3Code).pipe(take(1));
    const countryDetail: RESTCountries = await lastValueFrom(source$);
    return countryDetail;
  }
}
