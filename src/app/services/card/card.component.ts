import { Component, OnInit, Input } from '@angular/core';
import { Service } from '../service';
@Component({
  selector: 'geno-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() service = new Service();

  constructor() {
  }

  ngOnInit() {
  }

}
