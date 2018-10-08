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
        name: 'Photo Repository',
        imageUrl: '../../assets/imgs/photos.jpg',
        description:
          'Simple, but powerful photo repository using the MEAN stack, NGINX, Red Hat, Bootstrap and hosted on Amazon.',
        shapeClass: 'half-circle',
        link: 'https://photos.larry-hastings.com'
      },
      {
        name: 'Small Business',
        imageUrl: '../../assets/imgs/store-front.jpg',
        description:
          // tslint:disable-next-line:max-line-length
          'A single page website template for any small business that needs a web presence quickly and affordably.  This is Bootstrap 4 at work on top of Angular.JS.  It could be expanded upon or left as is.',
        shapeClass: 'img-circle',
        link: 'https://store-front.larry-hastings.com'
      },
      {
        name: 'Lulu\'s Recipes',
        imageUrl: '../../assets/imgs/lulu-portfolio.jpg',
        description:
          // tslint:disable-next-line:max-line-length
          'An Angular.JS app for recipe sharing named after my aunt Lulu!!. On the backend, this uses MongoDB, Express.JS, Node.JS, and a NGINX web server hosted on Red Hat Linux in the AWS cloud.',
        shapeClass: 'square',
        link: 'https://lulus-recipes.larry-hastings.com'
      },
      {
        name: 'Relaxing Workspace',
        imageUrl: '../../assets/imgs/curacao_beach.jpg',
        description:
          // tslint:disable-next-line:max-line-length
          'This is basically just a background wallpaper screen for a desktop or laptop. It has a jQuery checklist, a vanilla JavaScript calculator using Math.JS, and links for pandora and spotify for ease.',
        shapeClass: 'half-circle',
        link: '/relax-workspace'
      }
    ];
  }

  ngOnInit() {}
}

class Item {
  public name: string;
  public imageUrl: string;
  public description: string;
  public shapeClass: string;
  public link: string;
}
