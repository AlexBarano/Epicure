import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
  @Input() marginTop: string = '';
  @Input() marginBot: string = '';
  @Input() content: string = '';

  constructor() {}

  ngOnInit(): void {}
}
