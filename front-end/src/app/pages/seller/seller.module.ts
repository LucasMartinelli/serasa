import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerListComponent } from './seller-list/seller-list.component';
import { SellerAddComponent } from './seller-add/seller-add.component';
import { SellerDetailComponent } from './seller-detail/seller-detail.component';
import { SellerRoutingModule } from './seller-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { IConfig, NgxMaskModule } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;
@NgModule({
  imports: [
    CommonModule,
    SellerRoutingModule,
    SharedModule,
    NgxMaskModule.forRoot(options),
  ],
  declarations: [
    SellerListComponent,
    SellerAddComponent,
    SellerDetailComponent,
  ],
})
export class SellerModule {}
