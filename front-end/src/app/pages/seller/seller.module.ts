import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerListComponent } from './seller-list/seller-list.component';
import { SellerAddComponent } from './seller-add/seller-add.component';
import { SellerDetailComponent } from './seller-detail/seller-detail.component';
import { SellerRoutingModule } from './seller-routing.module';

@NgModule({
  imports: [CommonModule, SellerRoutingModule],
  declarations: [
    SellerListComponent,
    SellerAddComponent,
    SellerDetailComponent,
  ],
})
export class SellerModule {}
