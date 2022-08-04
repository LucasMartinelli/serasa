import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ISelect } from 'src/app/shared/interfaces/ISelect.interface';
import { IActuationResponse } from 'src/app/shared/interfaces/responses/IActuationResponse.interface';
import { stateList } from 'src/app/shared/utils/stateList';
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
  estados: ISelect[] = new stateList().getUF();
  showAddForm: boolean = false;
  displayedColumns: string[] = ['regiao', 'estados'];
  loading: boolean = true;

  constructor(
    private actuationService: ActuationService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getActuations();
  }

  getActuations() {
    this.loading = true;
    this.actuationService.getActuations().subscribe((actuations) => {
      if (actuations) {
        this.actuations = actuations;
      }
      this.loading = false;
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

  getEstado(estado) {
    return this.estados.find((UF) => UF.value === estado).viewValue;
  }
}
