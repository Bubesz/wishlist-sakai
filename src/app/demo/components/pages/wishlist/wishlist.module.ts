import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DataViewModule } from 'primeng/dataview';
import { WishlistRoutingModule } from './wishlist-routing.module';
import { WishlistComponent } from './wishlist.component';

@NgModule({
    imports: [
        ButtonModule,
        CommonModule,
        DataViewModule,
        WishlistRoutingModule
    ],
    declarations: [WishlistComponent]
})
export class WishlistModule { }
