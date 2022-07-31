import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ActuationService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  getActuations() {
    // return of({
    //   content: [
    //     {
    //       regiao: 'sudeste',
    //       estados: ['SP', 'RJ', 'MG', 'ES'],
    //     },
    //     {
    //       regiao: 'abc',
    //       estados: ['SP', 'AF'],
    //     },
    //   ],
    // });

    return this.http.get<any>(`${environment.apiUrl}/atuacao`).pipe(
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
}
