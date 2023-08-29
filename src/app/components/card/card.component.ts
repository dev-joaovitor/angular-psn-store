import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  gameLabel:string = ""
  @Input()
  gameCover:string = ""
  @Input()
  gameType:string = ""
  @Input()
  gamePrice: string = ""
}
