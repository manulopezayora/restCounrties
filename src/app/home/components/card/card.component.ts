import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RESTCountries } from '../../interfaces/RESTCountries.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() countriesList: RESTCountries[];

  constructor(private router: Router) {
    this.countriesList = [];
  }

  ngOnInit(): void {
  }

  public onClick(country: RESTCountries): void {
    this.router.navigate([`detail/${country.alpha3Code}`]);
  }

}
