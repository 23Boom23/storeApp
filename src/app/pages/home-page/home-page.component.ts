import { Component, OnInit } from '@angular/core';
const ROWS_HEIGTH: { [id: number]: number } = {
  1: 400,
  3: 335,
  4: 350
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  cols = 4
  rowHeight = ROWS_HEIGTH[this.cols]
  category: string | undefined = undefined;
  constructor() { }

  ngOnInit(): void {
  }

  onColumnsCountChanged(colsNumber: number): void {
    console.log(colsNumber)
    this.cols = colsNumber
    this.rowHeight = ROWS_HEIGTH[this.cols]
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory
  }

}
