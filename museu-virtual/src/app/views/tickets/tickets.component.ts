import { Component } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent {
  popupMessage: string = ''; // Mensagem a ser exibida no pop-up

  constructor() {}

  onFormSubmit(event: Event): void {
    event.preventDefault(); // Previne o comportamento padrão de envio do formulário

    const formData = new FormData(event.target as HTMLFormElement);
    const dateString = formData.get('date') as string;
    const quantity = Number(formData.get('quantity')); // Converte a quantidade para número
    const date = new Date(dateString);

    if (!dateString || !quantity) {
      this.openPopup('popup-error', 'Please fill in all fields.');
      return;
    }

    if (date < new Date()) {
      this.openPopup('popup-error', 'The selected date cannot be in the past.');
      return;
    }

    if (quantity <= 0) {
      this.openPopup('popup-error', 'The number of tickets must be greater than zero.');
      return;
    }

    const confirmationMessage = `Purchase successful!\nDate: ${date.toDateString()}\nQuantity: ${quantity}`;
    this.openPopup('popup-success', confirmationMessage);
  }

  openPopup(popupId: string, message: string): void {
    this.popupMessage = message;
    const popup = document.getElementById(popupId);
    if (popup) {
      popup.style.display = 'block';
    }
  }

  closePopup(popupId: string): void {
    const popup = document.getElementById(popupId);
    if (popup) {
      popup.style.display = 'none';
    }
  }
}
