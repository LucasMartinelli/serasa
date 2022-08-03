import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { ISellerRequest } from 'src/app/shared/interfaces/requests/ISellerRequest.interface';
import { ISellerResponse } from 'src/app/shared/interfaces/responses/ISellerResponse.interface';
import { Router } from '@angular/router';
import { PageRoutes } from 'src/app/shared/enums/page-routes.enum';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  baseUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  public getSellers(): Observable<ISellerResponse[]> {
    return this.http
      .get<ISellerResponse[]>(`${environment.apiUrl}/vendedor`)
      .pipe(
        map((sellers) => {
          return sellers;
        }),
        catchError((error) => {
          this.snackBar.open(
            'Não foi possível obter os dados dos vendedores. Entre em contato com o Administrador.',
            '',
            {
              duration: 2300,
            }
          );
          return of(null);
        })
      );
  }

  public getSellerById(id): Observable<ISellerResponse> {
    return this.http
      .get<ISellerResponse>(`${environment.apiUrl}/vendedor/${id}`)
      .pipe(
        map((seller) => {
          return seller;
        }),
        catchError((error) => {
          this.snackBar.open(
            'Não foi possível obter os dados do vendedor. Entre em contato com o Administrador.',
            '',
            {
              duration: 2300,
            }
          );
          this.router.navigate([PageRoutes.SELLER]);
          return of(null);
        })
      );
  }

  public saveSeller(seller: ISellerRequest): Observable<ISellerResponse> {
    return this.http
      .post<ISellerResponse>(`${environment.apiUrl}/vendedor`, seller)
      .pipe(
        map((response) => {
          this.snackBar.open('Vendedor salvo com sucesso.', '', {
            duration: 2300,
          });
          return response;
        }),
        catchError((error) => {
          this.snackBar.open(
            'Não foi possível salvar os dados do Vendedor. Entre em contato com o Administrador.',
            '',
            {
              duration: 2300,
            }
          );
          return of(null);
        })
      );
  }
}
