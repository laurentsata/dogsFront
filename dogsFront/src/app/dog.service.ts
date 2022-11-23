import { Injectable } from '@angular/core';
import { Dog } from './models/dog';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  private static readonly API_URL = 'http://localhost:8080/dogs';

  constructor(private http: HttpClient) { }

  findAllUnadoptedDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>(DogService.API_URL + '?isAdopted=false');
  }
//******************* dogs adopts *********************************************

  findAllAdoptedDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>(DogService.API_URL + '?isAdopted=true');
  }

  //postDogs(): Observable<Dog[]> {
   // return this.http.post(DogService.API_URL + 'id');
  //}
}
