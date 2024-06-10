import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WishlistComponent } from './wishlist.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: WishlistComponent }
    ])],
    exports: [RouterModule]
})
export class WishlistRoutingModule { }
