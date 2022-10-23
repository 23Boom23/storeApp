import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: [ './cart.component.scss' ]
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [
      {
        product: "https://via.placeholder.com/150",
        name: 'snikers',
        price: 150,
        quantity: 1,
        id: 1
      },
      {
        product: "https://via.placeholder.com/150",
        name: 'snikers',
        price: 150,
        quantity: 3,
        id: 2
      },
      {
        product: "https://via.placeholder.com/150",
        name: 'snikers',
        price: 150,
        quantity: 2,
        id: 3
      }
    ]
  }
  dataSource: Array<CartItem> = []
  displayedColumns: Array<string> = [ 'product', 'name', 'price', 'quantity', 'total', 'action' ]

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.dataSource = this.cart.items;
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    })
  }


  get total(): number {
    return this.cart.items
      .map((item: CartItem) => item.price * item.quantity)
      .reduce((prev, cur) => prev + cur, 0);
  }

  onClearCart(): void {
    this.cartService.clearCart()
  }

  onRemoveFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item)
  }

  onAddQuantity(item: CartItem): void {
    this.cartService.adddToCart(item)
  }

  onRemoveQuantity(item: CartItem): void {
    this.cartService.removeQuantity(item)
  }

}
