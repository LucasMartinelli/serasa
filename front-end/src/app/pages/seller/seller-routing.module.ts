import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageRoutes } from '../../shared/enums/page-routes.enum';
import { SellerAddComponent } from './seller-add/seller-add.component';
import { SellerDetailComponent } from './seller-detail/seller-detail.component';
import { SellerListComponent } from './seller-list/seller-list.component';

const routes: Routes = [
  {
    path: '',
    component: SellerListComponent,
  },
  {
    path: PageRoutes.ADD,
    component: SellerAddComponent,
  },
  {
    path: PageRoutes.ID,
    component: SellerDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellerRoutingModule {}
