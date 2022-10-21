import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
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
      }
    ]
  }
  dataSource: Array<CartItem> = []
  displayedColums: Array<string> = ['product', 'name', 'price', 'quantity', 'id', 'actions']

  constructor() { }

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }

}
