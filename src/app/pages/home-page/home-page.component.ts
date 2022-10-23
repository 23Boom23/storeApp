import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { StoreService } from 'src/app/services/store.service';
const ROWS_HEIGTH: { [ id: number ]: number } = {
  1: 400,
  3: 335,
  4: 350
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: [ './home-page.component.scss' ]
})
export class HomePageComponent implements OnInit, OnDestroy {
  cols = 4
  rowHeight = ROWS_HEIGTH[ this.cols ]
  category: string | undefined = undefined;
  products: Array<Product> | undefined;
  sort = 'desc';
  count = '12';
  productsSubscription: Subscription | undefined

  constructor(private cartService: CartService, private storeService: StoreService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productsSubscription = this.storeService.getAllProducts(this.count, this.sort, this.category).subscribe((_products) => {
      this.products = _products;
    })
  }

  onColumnsCountChanged(colsNumber: number): void {
    console.log(colsNumber)
    this.cols = colsNumber
    this.rowHeight = ROWS_HEIGTH[ this.cols ]
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory
    this.getProducts()
  }

  onAddToCart(product: Product): void {
    this.cartService.adddToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id,
    })
  }

  onItemsCountChanged(newCount: number): void {
    this.count = newCount.toString();
    this.getProducts()
  }

  onSortChanged(newSort: string): void {
    this.sort = newSort
    this.getProducts()
  }


  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }

}
