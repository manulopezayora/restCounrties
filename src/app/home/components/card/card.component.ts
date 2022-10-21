import { Component, Input, OnInit } from '@angular/core';
import { RESTCountries } from '../../interfaces/RESTCountries.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() countriesList: RESTCountries[];

  constructor() {
    this.countriesList = [];
  }

  ngOnInit(): void {
  }

}
