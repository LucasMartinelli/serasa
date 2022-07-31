import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageRoutes } from '../../shared/enums/page-routes.enum';
import { ActuationListComponent } from './actuation-list/actuation-list.component';

const routes: Routes = [
  {
    path: PageRoutes.ADD,
    component: ActuationListComponent,
  },
  { path: '', redirectTo: PageRoutes.ADD, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActuationRoutingModule {}
