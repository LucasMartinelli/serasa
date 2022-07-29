import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerListComponent } from './seller-list/seller-list.component';
import { SellerAddComponent } from './seller-add/seller-add.component';
import { SellerDetailComponent } from './seller-detail/seller-detail.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    SellerListComponent,
    SellerAddComponent,
    SellerDetailComponent,
  ],
})
export class SellerModule {}
