import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';
import { GallerySlideComponent } from './components/gallery-slide/gallery-slide.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'sesiones',
        component: GallerySlideComponent,
      },
      {
        path: 'paisajes',
        component: GallerySlideComponent,
      },
      {
        path: 'escalada',
        component: GallerySlideComponent,
      },
      {
        path: 'documental',
        component: GallerySlideComponent,
      },
      {
        path: '',
        component: PortfolioComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioRoutingModule {}
