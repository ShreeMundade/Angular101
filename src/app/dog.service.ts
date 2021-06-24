import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface BreedSingleImageResponse {
  message: string;
  status: string;

}
export interface BreedImagesResponse {
  message: string[];
  status: string;

}


@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private http: HttpClient) { }
  findDog(breed: string, subBreed?: string): Observable<BreedSingleImageResponse> {
    const endpoint = subBreed ?
      `/https://dog.ceo/api/breed/${breed}/${subBreed}/images/random` :
      ` https://dog.ceo/api/breed/${breed}/images/random`


    return this.http.get<BreedSingleImageResponse>(endpoint);
  }
  findMany(count:number,breed: string, subBreed?: string): Observable<BreedImagesResponse> {
    const endpoint = subBreed ?
      `/https://dog.ceo/api/breed/${breed}/${subBreed}/images/random/${count}` :
      ` https://dog.ceo/api/breed/${breed}/images/random/${count}`


    return this.http.get<BreedImagesResponse>(endpoint);
  }
}
