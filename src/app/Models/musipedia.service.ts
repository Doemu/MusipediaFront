import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Composition } from '../Models/composition';
import {Observable} from 'rxjs';
import {Performer} from './performer';
import {PerformedComposition} from './performed-composition';
import {AddPerformedCompositionModelComponent} from "../add-performed-composition/add-performed-composition.component";

@Injectable({
  providedIn: 'root'
})
export class MusipediaService {

  private baseURL: string;
  private apiCompositionUrl: string;
  private apiPerformerUrl: string;
  private apiPerformedCompositionUrl: string;
  private apiSaveCompositionUrl: string;
  private apiSavePerformerUrl: string;
  private apiCreatePerformedComposition: string;
  private apiDeleteCompositionUrl: string;
  private apiDeletePerformerUrl: string;
  private apiDeletePerformedCompositionUrl: string;



  constructor(private http: HttpClient) {
    this.baseURL = 'http://localhost:8080';
    this.apiCompositionUrl = `${this.baseURL}/compositions`;
    this.apiPerformerUrl = `${this.baseURL}/performers`;
    this.apiPerformedCompositionUrl = `${this.baseURL}/list`;
    this.apiSaveCompositionUrl = `${this.baseURL}/saveComposition`;
    this.apiSavePerformerUrl = `${this.baseURL}/savePerformer`;
    this.apiDeleteCompositionUrl = `${this.baseURL}/deleteComposition/`;
    this.apiDeletePerformerUrl = `${this.baseURL}/deletePerformer/`;
    this.apiCreatePerformedComposition = `${this.baseURL}/createPerformedComposition`;
    this.apiDeletePerformedCompositionUrl = `${this.baseURL}/deletePerformedComposition/`;
  }

  public compositions(): Observable<Composition[]>{
    return this.http.get<Composition[]>(this.apiCompositionUrl);
  }

  public performers(): Observable<Performer[]>{
    return this.http.get<Performer[]>(this.apiPerformerUrl);
  }

  public list(): Observable<PerformedComposition[]>{
    return this.http.get<PerformedComposition[]>(this.apiPerformedCompositionUrl);
  }

  public saveComposition(composition: Composition): Observable<Composition>{
    return this.http.post<Composition>(this.apiSaveCompositionUrl, composition);
  }

  public savePerformer(performer: Performer): Observable<Performer>{
    return this.http.post<Performer>(this.apiSavePerformerUrl, performer);
  }

  deleteComposition(id: number): Observable<any>
  {
    return this.http.delete(this.apiDeleteCompositionUrl + id);
  }

  deletePerformer(id: number): Observable<any>
  {
    return this.http.delete(this.apiDeletePerformerUrl + id);
  }

  public createPerformedComposition(performedComposition: AddPerformedCompositionModelComponent): Observable<PerformedComposition>{
    return this.http.post<PerformedComposition>(this.apiCreatePerformedComposition, performedComposition);
  }

  deletePerformedComposition(id: number): Observable<any> {
    return this.http.delete(this.apiDeletePerformedCompositionUrl + id);
  }
}
