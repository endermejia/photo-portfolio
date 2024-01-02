import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import KeenSlider, {KeenSliderInstance} from "keen-slider";

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
  slides: { img: string, title: string, desc?: string }[] = [
    {
      img: 'https://picsum.photos/1920/1080?random=1',
      title: 'Eventos',
      desc: 'Lorem'
    },
    {
      img: 'https://picsum.photos/1920/1080?random=2',
      title: 'Paisajes',
      desc: 'Lorem'
    },
    {
      img: 'https://picsum.photos/1920/1080?random=3',
      title: 'Retratos',
      desc: 'Lorem'
    },
    {
      img: 'https://picsum.photos/1920/1080?random=4',
      title: 'Project 4',
      desc: 'Lorem'
    },
    {
      img: 'https://picsum.photos/1920/1080?random=5',
      title: 'Project 5',
      desc: 'Lorem'
    },
    {
      img: 'https://picsum.photos/1920/1080?random=6',
      title: 'Project 6',
      desc: 'Lorem'
    },
    {
      img: 'https://picsum.photos/1920/1080?random=7',
      title: 'Project 7',
      desc: 'Lorem'
    },
    {
      img: 'https://picsum.photos/1920/1080?random=8',
      title: 'Project 8',
      desc: 'Lorem'
    },
    {
      img: 'https://picsum.photos/1920/1080?random=9',
      title: 'Project 9',
      desc: 'Lorem'
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
