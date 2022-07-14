import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() darkMode: boolean;

  constructor() {
    this.darkMode = false;
  }

  ngOnInit(): void {
  }

  public changeDarkMode(): void {
    this.darkMode = !this.darkMode;
  }
}
