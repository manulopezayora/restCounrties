import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  @Input() inputPlaceholder: string;
  @Output() sendSearchValue = new EventEmitter<string>();

  public searchValue: string;

  constructor() {
    this.inputPlaceholder = '';
    this.searchValue = '';
  }

  ngOnInit(): void {
    this.inputPlaceholder = this.inputPlaceholder || 'Write anything...'
  }

  public searchValueEmit(): void {
    this.sendSearchValue.emit(this.searchValue);
  }

}
