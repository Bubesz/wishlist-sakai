import { WishlistElementStatusLiteral } from "./wishlist-element-status";

export interface WishlistElement {
    name?: string;
    description?: string;
    image?: string;
    status?: WishlistElementStatusLiteral;
}
