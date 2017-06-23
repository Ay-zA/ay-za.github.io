import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'geno-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit, AfterViewInit {

  constructor(private elRef: ElementRef) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }
}
