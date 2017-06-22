import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'geno-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isHeaderExpand: boolean;

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    let number = event.srcElement.activeElement.scrollTop;

    if (number === 0) {
      this.isHeaderExpand = false;
    } else {
      this.isHeaderExpand = true;
    }
  }
}
