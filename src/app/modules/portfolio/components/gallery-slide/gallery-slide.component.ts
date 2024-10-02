import { Component } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { ActivatedRoute } from '@angular/router';

export type GalleryImage = {
  src: string;
  size: string;
  thumbnail: string;
  subHtml: string;
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

  arr: GalleryImage[] = [
    {
      src: `../../../assets/paisajes/img (1).avif`,
      size: '1600-2400',
      thumbnail: `../../../assets/paisajes/img (1).avif`,
      subHtml: `<h4>Image 1</h4>`,
    },
    {
      src: `../../../assets/paisajes/img (2).avif`,
      size: '1600-1067',
      thumbnail: `../../../assets/paisajes/img (2).avif`,
      subHtml: `<h4>Image 2</h4>`,
    },
    {
      src: `../../../assets/paisajes/img (4).avif`,
      size: '1600-1067',
      thumbnail: `../../../assets/paisajes/img (4).avif`,
      subHtml: `<h4>Image 4</h4>`,
    },
    {
      src: `../../../assets/paisajes/img (3).avif`,
      size: '1600-1067',
      thumbnail: `../../../assets/paisajes/img (3).avif`,
      subHtml: `<h4>Image 3</h4>`,
    },
    {
      src: `../../../assets/paisajes/img (5).avif`,
      size: '1600-1067',
      thumbnail: `../../../assets/paisajes/img (5).avif`,
      subHtml: `<h4>Image 5</h4>`,
    },
    {
      src: `../../../assets/paisajes/img (6).avif`,
      size: '1600-1067',
      thumbnail: `../../../assets/paisajes/img (6).avif`,
      subHtml: `<h4>Image 6</h4>`,
    },
    {
      src: `../../../assets/paisajes/img (7).avif`,
      size: '1600-1067',
      thumbnail: `../../../assets/paisajes/img (7).avif`,
      subHtml: `<h4>Image 7</h4>`,
    },
    {
      src: `../../../assets/paisajes/img (8).avif`,
      size: '1600-1067',
      thumbnail: `../../../assets/paisajes/img (8).avif`,
      subHtml: `<h4>Image 8</h4>`,
    },
    {
      src: `../../../assets/paisajes/img (9).avif`,
      size: '1600-1067',
      thumbnail: `../../../assets/paisajes/img (9).avif`,
      subHtml: `<h4>Image 9</h4>`,
    },
    {
      src: `../../../assets/paisajes/img (10).avif`,
      size: '1600-1067',
      thumbnail: `../../../assets/paisajes/img (10).avif`,
      subHtml: `<h4>Image 10</h4>`,
    },
    {
      src: `../../../assets/paisajes/img (11).avif`,
      size: '1600-1067',
      thumbnail: `../../../assets/paisajes/img (11).avif`,
      subHtml: `<h4>Image 11</h4>`,
    },
    {
      src: `../../../assets/paisajes/img (12).avif`,
      size: '1600-1067',
      thumbnail: `../../../assets/paisajes/img (12).avif`,
      subHtml: `<h4>Image 12</h4>`,
    },
    {
      src: `../../../assets/paisajes/img (13).avif`,
      size: '1600-1067',
      thumbnail: `../../../assets/paisajes/img (13).avif`,
      subHtml: `<h4>Image 13</h4>`,
    },
    {
      src: `../../../assets/paisajes/img (14).avif`,
      size: '1600-1067',
      thumbnail: `../../../assets/paisajes/img (14).avif`,
      subHtml: `<h4>Image 14</h4>`,
    },
    {
      src: `../../../assets/paisajes/img (15).avif`,
      size: '1600-1067',
      thumbnail: `../../../assets/paisajes/img (15).avif`,
      subHtml: `<h4>Image 15</h4>`,
    },
    {
      src: `../../../assets/paisajes/img (16).avif`,
      size: '1600-1067',
      thumbnail: `../../../assets/paisajes/img (16).avif`,
      subHtml: `<h4>Image 16</h4>`,
    },
  ];

  images: { [key: string]: GalleryImage[] } = {
    sesiones: this.arr,
    paisajes: this.arr,
    escalada: this.arr,
    documental: this.arr,
  };
  path: string = this.activatedRoute.snapshot.url[0].path;

  constructor(private activatedRoute: ActivatedRoute) {}

  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };
}
