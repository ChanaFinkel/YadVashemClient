import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registrant } from 'src/app/models/registrant.model';

@Injectable({
  providedIn: 'root'
})
export class SeminarWithRegistrantsService {

  baseUrl: string = "/api/Registrant/";

  constructor(private http: HttpClient) { }

  getAllRegistranrs(): Observable<Registrant[]> {
    return this.http.get<Registrant[]>(this.baseUrl);
  }

}
