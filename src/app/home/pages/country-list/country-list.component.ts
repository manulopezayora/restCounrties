import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public searchCountry(event: any) {
    console.log(event)
  }

}
