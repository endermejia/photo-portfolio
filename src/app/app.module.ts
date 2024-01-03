import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {registerLocaleData} from '@angular/common';
import localeEs from '@angular/common/locales/es';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { GallerySlideComponent } from './components/gallery-slide/gallery-slide.component';

registerLocaleData(localeEs);
@NgModule({
  declarations: [
    AppComponent,
    GallerySlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
