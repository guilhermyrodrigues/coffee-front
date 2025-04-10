import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../models/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private apiUrl = 'http://localhost:8080/api/pedidos';

  constructor(private http: HttpClient) { }

  criarPedido(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(this.apiUrl, pedido);
  }

  listarPedidos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.apiUrl);
  }

  buscarPorId(id: number): Observable<Pedido> {
    return this.http.get<Pedido>(`${this.apiUrl}/${id}`);
  }

  atualizarStatus(id: number, status: string): Observable<Pedido> {
    return this.http.patch<Pedido>(`${this.apiUrl}/${id}/status?status=${status}`, {});
  }
}
