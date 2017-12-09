import { Component, OnInit } from '@angular/core';

import { Item } from ''

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(items: Item[]) {
    items = {
        itemName: 'Relaxing Workspace',
        imageUrl: '../../assets/imgs/store-front.jpg',
        // tslint:disable-next-line:max-line-length
        description: 'A single page website template for any small business that needs a web presence up and running quickly and affordably',
        shapeClass: 'circle'
      };

   }

  ngOnInit() {
  }

}


