import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActuationAddDialogComponent } from '../actuation-add-dialog/actuation-add-dialog.component';
import { ActuationService } from '../services/actuation.service';

@Component({
  selector: 'app-actuation-list',
  templateUrl: './actuation-list.component.html',
  styleUrls: ['./actuation-list.component.scss'],
})
export class ActuationListComponent implements OnInit {
  actuations: any[] = [];
  displayedColumns: string[] = ['regiao', 'estados'];

  constructor(
    private actuationService: ActuationService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getActuations();
  }

  getActuations() {
    this.actuationService.getActuations().subscribe((actuations) => {
      //if (actuations.content.length > 0) {
      this.actuations = actuations;
      console.log(this.actuations);
      //}
    });
  }

  openDialog() {}
}
