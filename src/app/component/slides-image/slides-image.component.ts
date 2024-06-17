import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slides-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slides-image.component.html',
  styleUrls: ['./slides-image.component.css']
})
export class SlidesImageComponent implements OnInit, AfterViewInit {
  public dataCarousel!: { title: string; text: string; linkText: string; link: string; image: string; }[];
  public count: number = 0;

  @ViewChild('slide', { static: true }) slide!: ElementRef;

  constructor(private renderer: Renderer2) {}
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.dataCarousel = [
      {
        title: `Pagamentos com \nmáxima aprovação`,
        text: `Venda online com a maior taxa de aprovação possível. Reduza o número de vendas recusadas, autorize o maior número de pagamentos, receba e gerencie seu dinheiro de forma flexível.`,
        linkText: `Cadastre-se`,
        link: `#Cadastro`,
        image: "https://uploaddeimagens.com.br/images/004/799/723/full/Image1.png?1718624672",
      },
      {
        title: `Checkout de alta conversão`,
        text: `Uma solução de checkout com inúmeros recursos para potencializar ainda mais as suas vendas online. Customize toda a experiência de pagamento, ofereça produtos adicionais, recupere clientes, gere links para que outras pessoas possam promover seus produtos e mais.`,
        linkText: `Saiba mais`,
        link: `#SaibaMais`,
        image: 'https://uploaddeimagens.com.br/images/004/799/724/full/Image2.png?1718624706',
      },
      {
        title: `Controle total do \nseu fluxo financeiro`,
        text: `Filtre as informações que você quer ver e acompanhe seu extrato diariamente para saber quando você vai receber pelas suas vendas. Precisa do dinheiro antes? Antecipe os seus recebíveis com apenas alguns cliques!`,
        linkText: `Clique e conheça`,
        link: `#CliqueConheca`,
        image: 'https://uploaddeimagens.com.br/images/004/799/725/full/Image3.png?1718624725',
      },
      {
        title: `Receba as vendas parceladas \nem até 2 dias úteis`,
        text: `Solicite a antecipação de recebíveis online e receba pagamentos com agilidade, sem burocracia e sem juros abusivos. Vamos ajudar o seu negócio a adquirir capital de giro recebendo um dinheiro que já é seu!`,
        linkText: `Aproveite`,
        link: `#Aproveite`,
        image: 'https://uploaddeimagens.com.br/images/004/799/727/full/Image4.png?1718624742',
      },
    ];

    const slide = document.querySelector('.slide');
    slide?.addEventListener('transitionend', () => {
      slide.classList.remove('fade-out');
    });
  }

  handleBackClick(): void {
    if (this.count > 0) {
      document.querySelector('.slide')?.classList.add('fade-out');
      setTimeout(() => {
        this.count--;
      }, 300);
    }
  }

  handleNextClick(): void {
    if (this.count < this.dataCarousel.length - 1) {
      document.querySelector('.slide')?.classList.add('fade-out');
      setTimeout(() => {
        this.count++;
      }, 300);
    }
  }
}
