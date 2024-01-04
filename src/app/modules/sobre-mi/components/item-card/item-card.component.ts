import {Component, Input} from '@angular/core';

export interface ItemModel {
  name: string;
  img?: string;
  link?: string;
  organization?: string;
  place?: string;
  date_from?: string;
  date_to?: string;
  paragraphs?: string[];
}

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent {

  @Input() public item: ItemModel | undefined;

  public today: string = new Date().toISOString().split('T')[0];

}
