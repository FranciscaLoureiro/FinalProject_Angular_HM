import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-highlight-item',
  templateUrl: './highlight-item.component.html',
  styleUrls: ['./highlight-item.component.css']
})
export class HighlightItemComponent implements OnInit {
  @Input() product: any

  constructor() { }

  ngOnInit(): void {
  }

}
