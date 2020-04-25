import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProvedorModel } from '../modeles/provedorModel';

const base_url: string= 'http://localhost:3000/api/provedores'

@Injectable({
  providedIn: 'root'
})
export class ProvedoresService {

  constructor(private http: HttpClient) { }

  getProvedores():Observable<ProvedorModel[]>{
    let provedores =this.http.get<ProvedorModel[]>(base_url);
    return provedores;
  }
}
