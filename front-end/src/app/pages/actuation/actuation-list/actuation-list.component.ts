import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IActuationResponse } from 'src/app/shared/interfaces/responses/IActuationResponse.interface';
import { fade } from 'src/assets/animations/fade';
import { ActuationService } from '../services/actuation.service';

@Component({
  selector: 'app-actuation-list',
  templateUrl: './actuation-list.component.html',
  styleUrls: ['./actuation-list.component.scss'],
  animations: [fade],
})
export class ActuationListComponent implements OnInit {
  actuations: IActuationResponse[] = [];
  showAddForm: boolean = false;
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

  openDialog() {
    this.showAddForm = true;
  }

  changeAddFormVisibility(event: [boolean, boolean]) {
    this.showAddForm = event[0];
    if (event[1] === true) {
      this.getActuations();
    }
  }
}
