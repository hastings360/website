import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentVisible: string;
  lastVisible: string;

  constructor() {

  }

  ngOnInit() {
  }

  descDisplay(x: string): void {
    this.toggleCurrent(this.lastVisible);
    this.currentVisible = x;
    this.toggleCurrent(this.currentVisible);
    this.lastVisible = x;
  }

  toggleCurrent(y: string): void {
    switch (y) {
      case '#0':
        $('#0').toggleClass('desc-trans');
        break;
      case '#1':
        $('#1').toggleClass('desc-trans');
        break;
      case '#2':
        $('#2').toggleClass('desc-trans');
        break;
      case '#3':
        $('#3').toggleClass('desc-trans');
        break;
      case '#4':
        $('#4').toggleClass('desc-trans');
        break;
      case '#5':
        $('#5').toggleClass('desc-trans');
        break;

      case '#7':
        $('#7').toggleClass('desc-trans');
        break;
      case '#8':
        $('#8').toggleClass('desc-trans');
        break;
      case '#9':
        $('#9').toggleClass('desc-trans');
        break;
      case '#10':
        $('#10').toggleClass('desc-trans');
        break;
      case '#11':
        $('#11').toggleClass('desc-trans');
        break;
      case '#12':
        $('#12').toggleClass('desc-trans');
        break;
      case '#13':
        $('#13').toggleClass('desc-trans');
        break;
      case '#14':
        $('#14').toggleClass('desc-trans');
        break;
      case '#15':
        $('#15').toggleClass('desc-trans');
        break;
      case '#16':
        $('#16').toggleClass('desc-trans');
        break;
      case '#17':
        $('#17').toggleClass('desc-trans');
        break;
      default:
        break;
    }
  }

}
