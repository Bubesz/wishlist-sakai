import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/demo/service/product.service';
import { WishlistElement } from './wishlist-element';
import { WishlistElementStatusKeys, WishlistElementStatusLiteral } from './wishlist-element-status';

@Component({
    templateUrl: './wishlist.component.html',
    styleUrl: './wishlist.component.css'
})
export class WishlistComponent implements OnInit { 
    readonly WishlistElementStatusKeys = WishlistElementStatusKeys;
    
    products: WishlistElement[] = [];

    constructor(private productService: ProductService) { } // TODO change to wishlist service

    ngOnInit() {
        this.products = [
            {
                "name": "Bamboo Watch",
                "description": "Product Description",
                "image": "bamboo-watch.jpg",
                "status": WishlistElementStatusKeys.NEW.name as WishlistElementStatusLiteral
            },
            {
                "name": "Black Watch",
                "description": "Product Description",
                "image": "black-watch.jpg",
                "status": WishlistElementStatusKeys.NEW.name as WishlistElementStatusLiteral
            }
        ];
    }
}
