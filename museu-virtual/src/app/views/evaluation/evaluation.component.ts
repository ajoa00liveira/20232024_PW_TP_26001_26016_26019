import { Component } from '@angular/core';

@Component({
  selector: 'app-evaluation',
  styleUrls: ['./evaluation.component.scss'],
  templateUrl: './evaluation.component.html'
})
export class EvaluationComponent {

  onFormSubmit(event: Event): void {
    event.preventDefault(); // Prevent the default form submission behavior

    const formData = new FormData(event.target as HTMLFormElement);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const rating = formData.get('rating') as string;
    const comments = formData.get('comments') as string;

    // Here you would typically submit the form data to a server
    // For now, let's just show a confirmation popup

    const confirmationMessage = `Thank you, ${name}! Your evaluation has been submitted.`;
    this.openPopup(confirmationMessage);
  }

  openPopup(message: string): void {
    const popup = document.getElementById('evaluation-popup');
    const popupMessage = document.getElementById('popup-message');
    if (popup && popupMessage) {
      popupMessage.textContent = message;
      popup.style.display = 'block';
    }
  }

  closePopup(): void {
    const popup = document.getElementById('evaluation-popup');
    if (popup) {
      popup.style.display = 'none';
    }
  }
}