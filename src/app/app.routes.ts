import { Routes } from '@angular/router';
import { CardapioComponent } from './cardapio/cardapio.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { PedidoComponent } from './pedido/pedido.component';
import { ProdutoComponent } from './produto/produto.component';
import { DetalhesPedidoComponent } from './pedido/detalhes/detalhes.component';
import { CozinhaComponent } from './cozinha/cozinha.component';

export const routes: Routes = [
    { path: '', redirectTo: '/cardapio', pathMatch: 'full' },
    { path: 'cardapio', component: CardapioComponent },
    { path: 'produto/:id', component: ProdutoComponent },
    { path: 'carrinho', component: CarrinhoComponent },
    { path: 'pedido', component: PedidoComponent },
    { path: 'pedido/:id', component: DetalhesPedidoComponent },
    { path: 'cozinha', component: CozinhaComponent }
  ];
