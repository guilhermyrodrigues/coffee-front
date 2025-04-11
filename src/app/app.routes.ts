import { Routes } from '@angular/router';
import { CardapioComponent } from './cardapio/cardapio.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { PedidoComponent } from './pedido/pedido.component';

export const routes: Routes = [
    { path: '', redirectTo: '/cardapio', pathMatch: 'full' },
    { path: 'cardapio', component: CardapioComponent },
    { path: 'carrinho', component: CarrinhoComponent },
    { path: 'pedido', component: PedidoComponent }
  ];
