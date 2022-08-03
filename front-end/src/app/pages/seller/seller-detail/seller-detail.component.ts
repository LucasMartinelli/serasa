import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageRoutes } from 'src/app/shared/enums/page-routes.enum';
import { ISelect } from 'src/app/shared/interfaces/ISelect.interface';
import { ISellerResponse } from 'src/app/shared/interfaces/responses/ISellerResponse.interface';
import { Initials } from 'src/app/shared/utils/initials';
import { stateList } from 'src/app/shared/utils/stateList';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-detail',
  templateUrl: './seller-detail.component.html',
  styleUrls: ['./seller-detail.component.scss'],
})
export class SellerDetailComponent implements OnInit {
  seller: ISellerResponse;
  estados: ISelect[] = new stateList().getUF();
  initials = new Initials();

  constructor(
    private sellerService: SellerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.getSeller(id);
  }

  getSeller(id) {
    this.sellerService.getSellerById(id).subscribe((seller) => {
      if (seller) {
        this.seller = seller;
      }
    });
  }

  getInitials(name) {
    return this.initials.getInitials(name);
  }

  getEstado(estado) {
    return this.estados.find((UF) => UF.value === estado).viewValue;
  }

  backNavigationHandler() {
    document.querySelector('body').scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    this.router.navigate([PageRoutes.SELLER]);
  }
}
