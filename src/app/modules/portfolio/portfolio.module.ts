import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PortfolioRoutingModule} from './portfolio-routing.module';
import {PortfolioComponent} from './portfolio.component';
import {GallerySlideComponent} from './components/gallery-slide/gallery-slide.component';


@NgModule({
  declarations: [
    PortfolioComponent,
    GallerySlideComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule {
}
