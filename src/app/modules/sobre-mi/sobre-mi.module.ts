import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SobreMiRoutingModule} from './sobre-mi-routing.module';
import {SobreMiComponent} from './sobre-mi.component';
import {ItemCardComponent} from '../../components/item-card/item-card.component';

@NgModule({
  declarations: [
    SobreMiComponent,
    ItemCardComponent
  ],
  imports: [
    CommonModule,
    SobreMiRoutingModule,
  ]
})
export class SobreMiModule {
}
