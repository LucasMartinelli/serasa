import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PageRoutes } from 'src/app/shared/enums/page-routes.enum';
import { ISelect } from 'src/app/shared/interfaces/ISelect.interface';
import { Initials } from 'src/app/shared/utils/initials';
import { stateList } from 'src/app/shared/utils/stateList';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.component.html',
  styleUrls: ['./seller-list.component.scss'],
})
export class SellerListComponent implements OnInit {
  sellers: any[] = [];
  estados: ISelect[] = new stateList().getUF();
  initials = new Initials();
  displayedColumns: string[] = [
    'iniciais',
    'nome',
    'idade',
    'telefone',
    'cidade',
    'estados',
  ];

  constructor(
    private sellerService: SellerService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit() {
    this.getSellers();
  }

  getSellers() {
    this.sellerService.getSellers().subscribe((sellers) => {
      if (sellers) {
        this.sellers = sellers;
      }
    });
  }

  getEstado(estado) {
    return this.estados.find((UF) => UF.value === estado).viewValue;
  }

  navigateToAddSeller() {
    this.router.navigate([PageRoutes.SELLER, PageRoutes.ADD]);
  }

  getInitials(name) {
    return this.initials.getInitials(name);
  }

  navigateToSellerDetails(id) {
    this.router.navigate([PageRoutes.SELLER, id]);
  }
}
