import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PageRoutes } from 'src/app/shared/enums/page-routes.enum';
import { IActuation } from 'src/app/shared/interfaces/IActuation.interface';
import { ISelect } from 'src/app/shared/interfaces/ISelect.interface';
import { stateList } from 'src/app/shared/utils/stateList';
import { ActuationService } from '../../actuation/services/actuation.service';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-add',
  templateUrl: './seller-add.component.html',
  styleUrls: ['./seller-add.component.scss'],
})
export class SellerAddComponent implements OnInit {
  sellerForm: FormGroup;
  estados: ISelect[] = new stateList().getUF();
  actuations: IActuation[] = [];

  constructor(
    private sellerService: SellerService,
    private actuationService: ActuationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getActuations();
  }

  getActuations() {
    this.actuationService.getActuations().subscribe((actuations) => {
      if (actuations) {
        this.actuations = actuations;
      }
      this.createForm();
    });
  }

  createForm() {
    const noActuations: boolean = this.actuations.length === 0;

    this.sellerForm = new FormGroup({
      nome: new FormControl({ value: '', disabled: noActuations }, [
        Validators.required,
      ]),
      idade: new FormControl({ value: '', disabled: noActuations }, [
        Validators.required,
      ]),
      telefone: new FormControl({ value: '', disabled: noActuations }, [
        Validators.required,
      ]),
      cidade: new FormControl({ value: '', disabled: noActuations }, [
        Validators.required,
      ]),
      estado: new FormControl({ value: '', disabled: noActuations }, [
        Validators.required,
      ]),
      regiao: new FormControl({ value: '', disabled: noActuations }, [
        Validators.required,
      ]),
    });
  }

  backNavigationHandler() {
    document.querySelector('body').scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    this.router.navigate([PageRoutes.SELLER]);
  }

  navigateToActuations() {
    document.querySelector('body').scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    this.router.navigate([PageRoutes.ACTUATION]);
  }

  saveNewSeller() {
    this.sellerService.saveSeller(this.sellerForm.value).subscribe((seller) => {
      if (seller) {
        this.backNavigationHandler();
      }
    });
  }
}
