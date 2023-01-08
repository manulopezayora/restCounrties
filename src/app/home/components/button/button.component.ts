import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() labelButton: string;
  @Input() classButton: string[];
  @Input() showIcon: boolean;
  @Input() icon: string;

  constructor() {
    this.labelButton = '';
    this.classButton = [];
    this.showIcon = false;
    this.icon = '';
  }

  ngOnInit(): void {
    this.labelButton = this.labelButton || 'Button';
  }
}
