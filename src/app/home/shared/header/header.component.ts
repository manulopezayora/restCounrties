import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isDarkMode: boolean;

  constructor() {
    this.isDarkMode = false;
  }

  ngOnInit(): void {
  }

  public changeDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    this.setColorTheme(this.isDarkMode);
  }

  private setColorTheme(isDarkMode: boolean) {
    const lightTheme = {
      "--card-background": "rgba(255, 255, 255, 0.9)",
      "--font-color": "rgb(17, 21, 23)",
      "--main-background": "rgb(250, 250, 250)",
      "--card-box-shadow": "0 5px 10px 0 rgba(86, 87, 92, 0.37)"
    }
    
    const darkTheme = {
      "--card-background": "rgb(43, 57, 69)",
      "--font-color": "rgb(255, 255, 255)",
      "--main-background": "rgb(32, 44, 55)",
      "--card-box-shadow": "none"
    }
    isDarkMode ? this.changeTheme(darkTheme) : this.changeTheme(lightTheme);
  }

  private changeTheme(theme: any) {
    const styles = document.documentElement.style;
    const customStyles = Object.keys(theme);
    for (const style of customStyles) {
      styles.setProperty(style, theme[style])
    }
  }
}

