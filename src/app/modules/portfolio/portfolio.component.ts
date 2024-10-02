import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';

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
    './portfolio.component.scss',
  ],
})
export class PortfolioComponent implements AfterViewInit, OnDestroy {
  @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLElement>;

  slider!: KeenSliderInstance;
  slides: Slide[] = [
    {
      img: 'https://picsum.photos/1920/1080?random=1',
      title: 'Sesiones',
      route: 'sesiones',
    },
    {
      img: 'https://picsum.photos/1920/1080?random=2',
      title: 'Paisajes',
      route: 'paisajes',
    },
    {
      img: 'https://picsum.photos/1920/1080?random=3',
      title: 'Escalada',
      route: 'escalada',
    },
    {
      img: 'https://picsum.photos/1920/1080?random=4',
      title: 'Documental',
      route: 'documental',
    },
  ];
  currentSlide = 1;
  dotHelper: number[] = [];

  ngAfterViewInit() {
    setTimeout(() => {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        loop: true,
        initial: this.currentSlide,
        slideChanged: (s) => {
          this.currentSlide = s.track.details.rel;
        },
      });
      this.dotHelper = [
        ...Array.from(
          { length: this.slides.length },
          (_, i) => i + 1
        ).keys(),
      ];
    });
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
  }
}
