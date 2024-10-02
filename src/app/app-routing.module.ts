import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'portfolio',
    loadChildren: () =>
      import('./modules/portfolio/portfolio.module').then(
        (m) => m.PortfolioModule,
      ),
  },
  {
    path: 'sobre-mi',
    loadChildren: () =>
      import('./modules/sobre-mi/sobre-mi.module').then((m) => m.SobreMiModule),
  },
  {
    path: '**',
    redirectTo: '/portfolio',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
