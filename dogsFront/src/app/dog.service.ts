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
  findDogById(id: number): Observable<Dog> {
    return this.http.get<Dog>(DogService.API_URL + '/' + id);
  }

//******************* dogs adopts *********************************************

  findAllAdoptedDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>(DogService.API_URL + '?isAdopted=true');
  }

  create(dog: Dog): Observable<Dog> {
    return this.http.post<Dog>(DogService.API_URL, dog);
  }

  update(dog: Dog): Observable<Dog> {
    return this.http.put<Dog>(`${DogService.API_URL}/${dog.id}`, dog);
  }

  deleteDog(dog: Dog): Observable<Dog> {
    return this.http.delete<Dog>(DogService.API_URL + `/${dog.id}`);
  }
  //postDogs(): Observable<Dog> {
  //  return this.http.post<Dog>(`${DogService.API_URL}/${dog.id}`);
  //  }
}
