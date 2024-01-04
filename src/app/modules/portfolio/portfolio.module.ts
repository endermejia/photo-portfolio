import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PortfolioRoutingModule} from './portfolio-routing.module';
import {PortfolioComponent} from './portfolio.component';
import {GallerySlideComponent} from './components/gallery-slide/gallery-slide.component';
import {LightgalleryModule} from 'lightgallery/angular';


@NgModule({
  declarations: [
    PortfolioComponent,
    GallerySlideComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    LightgalleryModule
  ]
})
export class PortfolioModule {
}
