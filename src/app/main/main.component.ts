import { Component, OnInit, ElementRef } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'geno-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('slider', [
      transition('* => *', [
        style({ opacity: '0' }),
        animate(1000)
      ])
    ]),
    trigger('reveal', [
      transition('* => *', [
        animate('.6s 1s', keyframes([
          style({ width: 0, offset: 0 }),
          style({ width: '80%', offset: 0.2 }),
          style({ width: '100%', right: 0, offset: 0.3 }),
          style({ width: '100%', right: 0, offset: 0.7 }),
          style({ width: '60%', right: '40%', offset: 0.8 }),
          style({ width: '0', right: '100%', offset: 1.0 }),
        ]))
      ])
    ]),
    trigger('subreveal', [
      transition('* => *', [
        animate('.6s 2.5s', keyframes([
          style({ width: 0, offset: 0 }),
          style({ width: '80%', offset: 0.2 }),
          style({ width: '100%', right: 0, offset: 0.3 }),
          style({ width: '100%', right: 0, offset: 0.7 }),
          style({ width: '60%', right: '40%', offset: 0.8 }),
          style({ width: '0', right: '100%', offset: 1.0 }),
        ]))
      ])
    ]),
    trigger('fadein', [
      transition('* => *', [
        animate('1.5s', keyframes([
          style({ opacity: 0, offset: 0 }),
          style({ opacity: 0, offset: 0.9 }),
          style({ opacity: 1, offset: 1.0 }),
        ]))
      ])
    ]),
    trigger('subfadein', [
      transition('* => *', [
        animate('2.5s', keyframes([
          style({ opacity: 0, offset: 0 }),
          style({ opacity: 0, offset: 0.9 }),
          style({ opacity: 1, offset: 1.0 }),
        ]))
      ])
    ]),
    trigger('bgBorder', [
      transition('* => *', [
        animate('2s', keyframes([
          style({ background: 'transparent', border: 0, offset: 0 }),
          style({ background: 'transparent', border: 0, offset: .8 }),
        ]))
      ])
    ]),
    trigger('subBgBorder', [
      transition('* => *', [
        animate('3.5s', keyframes([
          style({ background: 'transparent', border: 0, offset: 0 }),
          style({ background: 'transparent', border: 0, offset: .8 }),
        ]))
      ])
    ])

  ]

})
export class MainComponent implements OnInit {
  reveal;
  info;

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
    {
      title: 'دسترسی در همه نقاط شهر',
      subtitle: 'با استفاده از سرویس های متنوع ما در سطح شهر هر مکان میتوانید دسترسی ۲۴ ساعته داشته باشید',
      image: 'tehran.jpg',
      state: 'green'
    },
  ];
  index = 1;
  changed = false;

  constructor(private elref: ElementRef) {

    this.info = this.infos[0];

    setInterval(() => {
      this.changed = !this.changed;
      if (this.index >= this.infos.length) {
        this.index = 0;
      }
      this.info = this.infos[this.index++];
      // this.changed = true;
    }, 6000);
  }

  ngOnInit() {
  }

}
