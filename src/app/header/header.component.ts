import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'geno-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isExpanded;

  constructor() { }

  ngOnInit() {
  }

}
