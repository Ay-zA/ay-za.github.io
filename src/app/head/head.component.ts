import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { TimelineMax } from "gsap";

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
    let tl = new TimelineMax({ repeat: -1 });
    let iphoneOutline = this.elRef.nativeElement.querySelector('#phone-outline');
    iphoneOutline.addEventListener("load", function() {
      let svgDocs = iphoneOutline.contentDocument.querySelectorAll('svg .a');
    }, false);
  }
}
