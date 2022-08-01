import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IActuationRequest } from 'src/app/shared/interfaces/requests/IActuationRequest.interface';
import { IActuationResponse } from 'src/app/shared/interfaces/responses/IActuationResponse.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ActuationService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  public getActuations(): Observable<IActuationResponse[]> {
    return this.http
      .get<IActuationResponse[]>(`${environment.apiUrl}/atuacao`)
      .pipe(
        map((actuations) => {
          return actuations;
        }),
        catchError((error) => {
          this.snackBar.open(
            'Não foi possível obter os dados das áreas de atuação. Entre em contato com o Administrador.',
            '',
            {
              duration: 2300,
            }
          );
          return of(null);
        })
      );
  }

  public saveActuation(
    actuation: IActuationRequest
  ): Observable<IActuationResponse> {
    return this.http
      .post<IActuationResponse>(`${environment.apiUrl}/atuacao`, actuation)
      .pipe(
        map((response) => {
          this.snackBar.open('Área de atuação salva com sucesso.', '', {
            duration: 2300,
          });
          return response;
        }),
        catchError((error) => {
          this.snackBar.open(
            'Não foi possível salvar a área de atuação. Entre em contato com o Administrador.',
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
