import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  public items: Item[];

  constructor() {
    this.items = [
      {
        name: 'Small Business',
        imageUrl: '../../assets/imgs/store-front.jpg',
        // tslint:disable-next-line:max-line-length
        description: 'A single page website template for any small business that needs a web presence quickly and affordably.  This is Bootstrap 4 at work on top of Angular.JS',
        shapeClass: 'img-circle',
        link: 'http://store-front.gq'
      },
      {
        // tslint:disable-next-line:quotemark
        name: "Lulu's Recipes",
        imageUrl: '../../assets/imgs/lulu-portfolio.jpg',
        // tslint:disable-next-line:max-line-length
        description: 'An Angular.JS app for recipe sharing named after my aunt Lulu!!. This uses the MEAN stack with a NGINX web server hosted on Red Hat Linux in the AWS cloud.',
        shapeClass: 'square',
        link: 'http://lulus-recipes.be'
      },
      {
        name: 'Relaxing Workspace',
        imageUrl: '../../assets/imgs/curacao_beach.jpg',
        // tslint:disable-next-line:max-line-length
        description: 'This is basically just a background wallpaper screen for a desktop or laptop. It has a jQuery checklist, a pure JavaScript calculator using Math.JS, and pandora.',
        shapeClass: 'half-circle',
        link: '/relax-workspace'
      }
    ];
  }

  ngOnInit() {
  }

}

class Item {
    public name: string;
    public imageUrl: string;
    public description: string;
    public shapeClass: string;
    public link: string;
}

