import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})
export class HighlightsComponent implements OnInit {
  products = [
    {
      name: 'Casaco',
      description: 'Muito giro',
      price: 22,
      image: 'assets/contrast_panel_short_sleeve_shirt_1.jpg'
    },
    {
      name: 'Jaqueta',
      description: 'Muito giro',
      price: 22,
      image: 'assets/contrast_panel_short_sleeve_shirt_1.jpg'
    },
    {
      name: 'Calças',
      description: 'Muito giro',
      price: 22,
      image: 'assets/contrast_panel_short_sleeve_shirt_1.jpg'
    },
    {
      name: 'Camisa',
      description: 'Muito giro',
      price: 22,
      image: 'assets/contrast_panel_short_sleeve_shirt_1.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
