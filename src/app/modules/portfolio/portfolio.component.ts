import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import KeenSlider, {KeenSliderInstance} from 'keen-slider';

interface Slide {
  img: string;
  title: string;
  route?: string;
  desc?: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: [
    '../../../../node_modules/keen-slider/keen-slider.min.css',
    './portfolio.component.scss'
  ],
})
export class PortfolioComponent implements AfterViewInit, OnDestroy {
  @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLElement>

  slider!: KeenSliderInstance;
  slides: Slide[] = [
    {
      img: 'https://picsum.photos/1920/1080?random=1',
      title: 'Eventos',
      route: 'eventos'
    },
    {
      img: 'https://picsum.photos/1920/1080?random=2',
      title: 'Paisajes',
      route: 'paisajes'
    },
    {
      img: 'https://picsum.photos/1920/1080?random=3',
      title: 'Retratos',
      route: 'retratos',
    },
  ]

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      loop: true,
    })
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }
}
