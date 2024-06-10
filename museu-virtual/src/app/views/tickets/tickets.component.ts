import { Component } from '@angular/core';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.scss'
})
export class TicketsComponent {
  constructor() {}

  onFormSubmit(event: Event): void {
    event.preventDefault(); // Previne o comportamento padrão de envio do formulário

    const formData = new FormData(event.target as HTMLFormElement);
    const date = new Date(formData.get('date') as string);
    const quantity = Number(formData.get('quantity')); // Converte a quantidade para número

    if (!date || !quantity) {
      alert('Por favor, preencha todos os campos.');
      return; // Interrompe o processamento se algum campo estiver vazio
    }

    if (date < new Date()) {
      alert('A data selecionada não pode ser anterior à data atual.');
      return; // Interrompe o processamento se a data for anterior à atual
    }
    
    if (date < new Date()) {
      alert('A data selecionada não pode ser anterior à data atual.');
      return; // Interrompe o processamento se a data for anterior à atual
    }

    if (quantity <= 0) {
      alert('A quantidade de bilhetes deve ser maior que zero.');
      return; // Interrompe o processamento se a quantidade for menor ou igual a zero
    }


    const confirmationMessage = `Compra realizada com sucesso!\nData: ${date.toDateString()}\nQuantidade: ${quantity}`;
    alert(confirmationMessage);
  }

  private isWithinOpeningHours(time: string): boolean {
    const openingTimeUTC = this.getLocalTimeUTC(8, 0); // Converte a hora de abertura local para UTC
    const closingTimeUTC = this.getLocalTimeUTC(22, 0); // Converte a hora de fechamento local para UTC

    const selectedTimeUTC = this.getLocalTimeUTC(Number(time.split(':')[0]), Number(time.split(':')[1])); // Converte o horário selecionado para UTC

    return selectedTimeUTC >= openingTimeUTC && selectedTimeUTC <= closingTimeUTC;
  }

  private getLocalTimeUTC(hours: number, minutes: number): Date {
    const localTime = new Date();
    localTime.setHours(hours, minutes, 0); // Define a hora local
    const utcTime = new Date(localTime.getTime() + localTime.getTimezoneOffset() * 60000); // Converte para UTC
    return utcTime;
  }
}
