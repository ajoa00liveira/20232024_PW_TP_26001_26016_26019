import { Component } from '@angular/core';

@Component({
  selector: 'app-evaluation',
  standalone: true,
  imports: [],
  templateUrl: './evaluation.component.html',
  styleUrl: './evaluation.component.scss'
})

export class EvaluationComponent {
  onFormSubmit(event: Event): boolean {
    // Aqui você pode adicionar a lógica para processar o formulário
    // Exibir o pop-up de confirmação
    alert('Formulário enviado com sucesso!');
    return true;

    
    // Retorna false para impedir o envio padrão do formulário
    return false;
  }
}
