import { Component } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import {BeforeSlideDetail} from "lightgallery/lg-events";

@Component({
  selector: 'app-gallery-slide',
  templateUrl: './gallery-slide.component.html',
  styleUrls: ['./gallery-slide.component.scss']
})
export class GallerySlideComponent {
  settings = {
    counter: false,
    plugins: [lgZoom],
  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };


}
