import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActuationListComponent } from './actuation-list/actuation-list.component';
import { ActuationRoutingModule } from './actuation-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ActuationAddDialogComponent } from './actuation-add-dialog/actuation-add-dialog.component';

@NgModule({
  imports: [CommonModule, ActuationRoutingModule, SharedModule],
  declarations: [ActuationListComponent, ActuationAddDialogComponent],
})
export class ActuationModule {}
