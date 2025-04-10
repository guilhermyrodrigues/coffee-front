import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Avaliacao } from '../models/avaliacao.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {

  private apiUrl = 'http://localhost:8080/api/pedidos';

  constructor(private http: HttpClient) { }
  
    criarAvaliacao(avaliacao: Avaliacao): Observable<Avaliacao> {
      return this.http.post<Avaliacao>(this.apiUrl, avaliacao);
    }
  
    listarPedidos(): Observable<Avaliacao[]> {
      return this.http.get<Avaliacao[]>(this.apiUrl);
    }

}
