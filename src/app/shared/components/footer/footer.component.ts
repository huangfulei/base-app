import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  public currentYear: number;

  constructor() {
  }

  ngOnInit() {
    const date = new Date();
    this.currentYear = date.getFullYear();
  }

}
