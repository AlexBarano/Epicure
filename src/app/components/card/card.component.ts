import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() id: string = '';
  @Input() lowerTitle: string = '';
  @Input() img!: string;
  @Input() type: string = '';
  @Input() upperTitle: string | undefined;
  @Input() description: string | undefined;
  @Input() propertyIcon: string | undefined;
  @Input() ingridients: string | undefined;
  @Input() price: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
