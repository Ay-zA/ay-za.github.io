import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'geno-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  infos = [
    {
      title: 'سرویس هاس لوکس',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'lux.jpg',
      state: 'lux'
    },
    {
      title: 'دسترسی در همه نقاط شهر',
      subtitle: 'با استفاده از سرویس های متنوع ما در سطح شهر هر مکان میتوانید دسترسی ۲۴ ساعته داشته باشید',
      image: 'map.jpg',
      state: 'map'
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
