// pedido.model.ts
import { ItemPedido } from './item-pedido.model';
import { Avaliacao } from './avaliacao.model';

export interface Pedido {
    id?: number; // gerado pelo backend
    cpf: string;
    valorTotal?: number; // calculado no backend
    formaPagamento: string;
    dataHoraPedido?: string; // gerado no backend
    previsaoEntrega?: string; // calculado no backend
    status?: 'PENDENTE' | 'EM_PREPARO' | 'FINALIZADO' | 'CANCELADO'; // pode iniciar com valor padrão no backend
    itens: ItemPedido[];
    avaliacao?: Avaliacao;
    motivoCancelamento?: string;
  }
  