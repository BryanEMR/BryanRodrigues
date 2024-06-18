import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true // Certifique-se de que está configurado corretamente para o seu caso
})
export class HeaderComponent {

  constructor(private router: Router) { }

  navigateToContatos() {
    this.router.navigate(['/contatos']);
  }

  navigateToQuemSomos() {
    this.router.navigate(['/quem_somos']);
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
