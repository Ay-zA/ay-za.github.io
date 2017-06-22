import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'geno-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent implements OnInit {
  steps = [
    { icon: 'signin', title: 'ثبت نام', state: 1 },
    { icon: 'moraje', title: 'مراجعه', state: 0 },
    { icon: 'accept', title: 'تایید', state: 0 },
    { icon: 'drive', title: 'شیفت', state: 0 },
    { icon: 'money', title: 'کسب درامد', state: 0 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
