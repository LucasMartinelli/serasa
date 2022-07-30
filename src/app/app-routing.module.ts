import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageRoutes } from './shared/enums/page-routes.enum';

const routes: Routes = [
  {
    path: PageRoutes.ACTUATION,

    loadChildren: () =>
      import('./pages/actuation/actuation.module').then(
        (m) => m.ActuationModule
      ),
  },
  {
    path: PageRoutes.SELLER,
    loadChildren: () =>
      import('./pages/seller/seller.module').then((m) => m.SellerModule),
  },
  { path: '', redirectTo: PageRoutes.ACTUATION, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
