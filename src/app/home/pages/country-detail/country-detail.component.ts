import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  private _allCountries!: RESTCountries[];

  constructor(
    private _restCountriesService: RestCountriesService,
    private _route: ActivatedRoute,
    private _router: Router
    ) {
  }

  ngOnInit(): void {
    const alpha3Code: string = this._route.snapshot.paramMap.get('alpha3Code') || '';
    this._initialize(alpha3Code);
  }

  public onClickBorderButton(country: RESTCountries): void {
    this._router.navigate([`detail/${country.alpha3Code}`]);
    this._initialize(country.alpha3Code);
  }


  private async _initialize(alpha3Code: string): Promise<void> {
    this._allCountries = await this._getAllCountries();
    this.countryDetail = await this._getCountryDetail(alpha3Code);
  }

  private async _getCountryDetail(alpha3Code: string): Promise<RESTCountries> {
    const source$ = this._restCountriesService.getCountryDetail(alpha3Code).pipe(take(1));
    const countryDetail: RESTCountries = await lastValueFrom(source$);
    return {
      ...countryDetail,
      bordersBtn: await this.setDetail(countryDetail)
    }
  }

  private async _getAllCountries(): Promise<RESTCountries[]> {
    const source$ = this._restCountriesService.getAllCountries().pipe(take(1));
    const allCountries: RESTCountries[] = await lastValueFrom(source$);
    return allCountries;
  }

  private async setDetail(countryDetail: RESTCountries) {
    let borders: any[] = [];
    countryDetail.borders?.forEach((el) => {
      const borderCountry = this._allCountries.find(c => c.alpha3Code === el);
      borders.push(borderCountry);
    });
    return borders;
  }
}