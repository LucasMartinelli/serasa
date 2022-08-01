import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ISelect } from 'src/app/shared/interfaces/ISelect.interface';
import { stateList } from 'src/app/shared/utils/stateList';
import { ActuationService } from '../services/actuation.service';

@Component({
  selector: 'app-actuation-add-dialog',
  templateUrl: './actuation-add-dialog.component.html',
  styleUrls: ['./actuation-add-dialog.component.scss'],
})
export class ActuationAddDialogComponent implements OnInit {
  actuationForm: FormGroup;
  estados: ISelect[] = new stateList().getUF();

  @Output() closeDialog = new EventEmitter<[boolean, boolean]>();

  constructor(private actuationService: ActuationService) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.actuationForm = new FormGroup({
      regiao: new FormControl('', [Validators.required]),
      estados: new FormControl('', [Validators.required]),
    });
  }

  closeDialogHandler(reload: boolean = false): void {
    this.closeDialog.emit([false, reload]);
  }

  saveActuation(): void {
    this.actuationService
      .saveActuation(this.actuationForm.value)
      .subscribe((actuation) => {
        if (actuation) {
          this.closeDialogHandler(true);
        }
      });
  }
}
