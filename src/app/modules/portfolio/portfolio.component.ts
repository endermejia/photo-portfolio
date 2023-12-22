import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import KeenSlider, {KeenSliderInstance} from "keen-slider";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['../../../../node_modules/keen-slider/keen-slider.min.css',
    './portfolio.component.scss'],
})
export class PortfolioComponent implements AfterViewInit, OnDestroy {
  @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLElement>

  slider!: KeenSliderInstance;

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      loop: true,
    })
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }
}
