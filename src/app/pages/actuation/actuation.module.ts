import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActuationAddComponent } from './actuation-add/actuation-add.component';
import { ActuationRoutingModule } from './actuation-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule, ActuationRoutingModule, SharedModule],
  declarations: [ActuationAddComponent],
})
export class ActuationModule {}
