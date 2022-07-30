import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageRoutes } from '../../shared/enums/page-routes.enum';
import { ActuationAddComponent } from './actuation-add/actuation-add.component';

const routes: Routes = [
  {
    path: PageRoutes.ADD,
    component: ActuationAddComponent,
  },
  { path: '', redirectTo: PageRoutes.ADD, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActuationRoutingModule {}
