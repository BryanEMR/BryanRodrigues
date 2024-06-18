import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    NgxMaskDirective,
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  userForm: FormGroup;

  destinatarios = ['Destinatário 1', 'Destinatário 2', 'Destinatário 3'];

  estados = [
    'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal',
    'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul',
    'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí',
    'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia',
    'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'
  ];

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      destinatario: ['', Validators.required],
      assunto: ['', Validators.required],
      nome: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(80)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
      empresa: ['', Validators.maxLength(80)],
      estado: ['', Validators.required],
      cidade: ['', [Validators.required, Validators.maxLength(80)]],
      telefone1: ['', [Validators.required, Validators.pattern(/^\(\d{2}\) \d{5}-\d{4}$/)]],
      telefone2: ['', Validators.pattern(/^\(\d{2}\) \d{5}-\d{4}$/)],
      mensagem: ['', Validators.required]
    });
  }

  onSubmit() {
    // Verifica se o formulário é válido antes de enviar
    if (this.userForm.valid) {
      // Simula envio do formulário (você deve implementar a lógica de envio real)
      console.log('Formulário enviado', this.userForm.value);

      // Mostra o alerta de envio
      alert('Formulário enviado com sucesso!');

      // Limpa os dados do formulário
      this.userForm.reset();
    } else {
      // Marca os campos como tocados para exibir mensagens de erro
      this.validateForm();
    }
  }

  validateForm() {
    Object.keys(this.userForm.controls).forEach(field => {
      const control = this.userForm.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }

}
