import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RESTCountries } from '../../interfaces/RESTCountries.interface';


@Injectable({
  providedIn: 'root'
})
export class RestCountriesService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${environment.baseUrl}${environment.version}`;
  }

  public getAllCountries(): Observable<RESTCountries[]> {
    return this.http.get<RESTCountries[]>(`${this.baseUrl}/all`);
  }

  public getCountryDetail(alpha3Code: string): Observable<RESTCountries> {
    return this.http.get<RESTCountries>(`${this.baseUrl}/alpha/${alpha3Code}`);
  }
}