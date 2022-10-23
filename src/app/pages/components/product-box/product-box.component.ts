import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: [ './product-box.component.scss' ]
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWithMode = false;
  @Input() product: Product | undefined;

  @Output() adddToCart = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }


  onAddToCart(): void {
    this.adddToCart.emit(this.product)
  }
}
