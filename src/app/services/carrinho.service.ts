// src/app/shared/services/carrinho.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Produto } from '../models/produto.model';

export interface ItemCarrinho {
  produto: Produto;
  quantidade: number;
}

@Injectable({ providedIn: 'root' })
export class CarrinhoService {
  private carrinhoSubject = new BehaviorSubject<ItemCarrinho[]>([]);
  carrinho$ = this.carrinhoSubject.asObservable();

  adicionarProduto(produto: Produto) {
    const atual = this.carrinhoSubject.getValue();
    const index = atual.findIndex(item => item.produto.id === produto.id);

    if (index > -1) {
      atual[index].quantidade += 1;
    } else {
      atual.push({ produto, quantidade: 1 });
    }

    this.carrinhoSubject.next([...atual]);
  }

  limparCarrinho() {
    this.carrinhoSubject.next([]);
  }

  removerProduto(produtoId: number) {
    const atual = this.carrinhoSubject.getValue().filter(p => p.produto.id !== produtoId);
    this.carrinhoSubject.next([...atual]);
  }

  getItens(): ItemCarrinho[] {
    return this.carrinhoSubject.getValue();
  }
}
