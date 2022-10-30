import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-input',
  templateUrl: './filter-input.component.html',
  styleUrls: ['./filter-input.component.scss']
})
export class FilterInputComponent {
  @Input() comboValues: string[];
  @Output() onSelectedOption = new EventEmitter<string>();

  public isFilteredByRegion: boolean;

  constructor() {
    this.comboValues = [];
    this.isFilteredByRegion = false;

  }

  public selectedOption(value: string): void {
    this.isFilteredByRegion = value !== 'clear';
    this.onSelectedOption.emit(value);
  }

}
