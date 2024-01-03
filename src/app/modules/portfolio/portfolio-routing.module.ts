import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PortfolioComponent} from './portfolio.component';
import {GallerySlideComponent} from '../../components/gallery-slide/gallery-slide.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'eventos',
        component: GallerySlideComponent
      },
      {
        path: 'paisajes',
        component: GallerySlideComponent
      },
      {
        path: 'retratos',
        component: GallerySlideComponent
      },
      {
        path: '',
        component: PortfolioComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule {
}
