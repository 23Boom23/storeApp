import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: [ './products-header.component.scss' ]
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnsCountChanged = new EventEmitter<number>();
  @Output() itemsCountChanged = new EventEmitter<number>();
  @Output() sortChanged = new EventEmitter<string>();

  sort = 'desc'
  itemsShowCount = 12;
  constructor() { }

  ngOnInit(): void {
  }

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
    this.sortChanged.emit(newSort);
  }

  onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
    this.itemsCountChanged.emit(count)
  }

  onColumnsUpdated(colsNumber: number): void {
    this.columnsCountChanged.emit(colsNumber);
  }

}
