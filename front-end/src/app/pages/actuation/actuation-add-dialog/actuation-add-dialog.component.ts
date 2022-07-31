import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ISelect } from 'src/app/shared/interfaces/ISelect.interface';
import { stateList } from 'src/app/shared/utils/stateList';

@Component({
  selector: 'app-actuation-add-dialog',
  templateUrl: './actuation-add-dialog.component.html',
  styleUrls: ['./actuation-add-dialog.component.scss'],
})
export class ActuationAddDialogComponent implements OnInit {
  actuationForm: FormGroup;
  estados: ISelect[] = new stateList().getUF();

  constructor() {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.actuationForm = new FormGroup({
      regiao: new FormControl('', [Validators.required]),
      estados: new FormControl('', [Validators.required]),
    });
  }
}
