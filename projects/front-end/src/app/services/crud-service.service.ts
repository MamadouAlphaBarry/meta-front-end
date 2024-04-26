import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {
  public error: any
  constructor(private http: HttpClient) { }

  // Fonction générique pour gérer les erreurs
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(error);
  }

  // Opération de création
  create<T>(resource: T, url: string): Observable<T> {
    return this.http.post<T>(url, resource)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Opération de lecture
  read<T>(url: string): Observable<T> {
    return this.http.get<T>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Opération de mise à jour
  update<T>(resource: T, url: string): Observable<T> {
    return this.http.put<T>(url, resource)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Opération de suppression
  delete(url: string): Observable<void> {
    return this.http.delete<void>(url)
      .pipe(
        catchError(this.handleError)
      );
  }
  getById<T>(id: string, url: string): Observable<T> {
    const fullUrl = `${url}/${id}`;
    return this.http.get<T>(fullUrl)
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }
  getByFieldName<T>(id: string, url: string): Observable<T> {
    const fullUrl = `${url}/${id}`;
    return this.http.get<T>(fullUrl)
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }
}
