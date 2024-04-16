// import { Component } from '@angular/core';
// import { SenhasService } from '../services/senhas.service';
// import { Tab1Page } from '../tab1/tab1.page';

// @Component({
//   selector: 'app-tab3',
//   templateUrl: 'tab3.page.html',
//   styleUrls: ['tab3.page.scss']
// })

// export class Tab3Page {
//   currentDate: Date = new Date(); // Variável para armazenar a data atual

//   constructor(public senhasService: SenhasService) {}

//   // Método para obter a data atual no formato "ano mês dia"
//   getCurrentDateFormatted(): string {
//     const year = this.currentDate.getFullYear();
//     const month = this.padZero(this.currentDate.getMonth() + 1); // Adiciona zero à esquerda se for necessário
//     const day = this.padZero(this.currentDate.getDate()); // Adiciona zero à esquerda se for necessário
//     return `${year}-${month}-${day}`;
//   }

//   // Método auxiliar para adicionar zero à esquerda, se necessário
//   private padZero(value: number): string {
//     return value < 10 ? `0${value}` : `${value}`;
//   }
// }
import { Component, OnInit } from '@angular/core';
import { SenhasService } from '../services/senhas.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  relatorio: any[] = [];

  constructor(public senhasService: SenhasService) {}

  gerarMinutosNovos() {
    this.senhasService.gerarMinutosNovos();
  }

  ngOnInit() {
    this.gerarRelatorio();
  }

  gerarRelatorio() {
    this.relatorio = this.senhasService.gerarRelatorioDetalhado(this.senhasService.senhasAtendidasENaoAtendidas);
  }
}