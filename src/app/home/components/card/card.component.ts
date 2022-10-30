import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RESTCountries } from '../../interfaces/RESTCountries.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent  {
  @Input() countriesList: RESTCountries[];

  constructor(private _router: Router) {
    this.countriesList = [];
  }

  public onClick(country: RESTCountries): void {
    this._router.navigate([`detail/${country.alpha3Code}`]);
  }

}
