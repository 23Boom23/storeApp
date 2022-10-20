import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: [ './home-page.component.scss' ]
})
export class HomePageComponent implements OnInit {
  cols = 0
  constructor() { }

  ngOnInit(): void {
  }

  onColumnsCountChanged(colsNumber: number): void {
    this.cols = colsNumber
  }

}
