import { Component } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { ActivatedRoute } from '@angular/router';

export type ImageDto = {
  src: string;
  alt: string;
};

@Component({
  selector: 'app-gallery-slide',
  templateUrl: './gallery-slide.component.html',
  styleUrls: ['./gallery-slide.component.scss'],
})
export class GallerySlideComponent {
  settings = {
    counter: false,
    plugins: [lgZoom],
  };

  images: { [key: string]: ImageDto[] } = {
    eventos: Array.from({ length: 16 }, (_, i) => {
      return {
        src: `../../../assets/paisajes/img (${i + 1}).avif`,
        alt: `paisaje ${i + 1}`,
      };
    }),
    paisajes: Array.from({ length: 16 }, (_, i) => {
      return {
        src: `../../../assets/paisajes/img (${i + 1}).avif`,
        alt: `paisaje ${i + 1}`,
      };
    }),
    retratos: Array.from({ length: 16 }, (_, i) => {
      return {
        src: `../../../assets/paisajes/img (${i + 1}).avif`,
        alt: `paisaje ${i + 1}`,
      };
    }),
  };
  path: string = this.activatedRoute.snapshot.url[0].path;

  constructor(private activatedRoute: ActivatedRoute) {}

  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };
}
