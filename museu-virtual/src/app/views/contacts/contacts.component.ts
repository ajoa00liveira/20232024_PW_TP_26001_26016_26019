import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {

  onFormSubmit(event: Event): void {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(event.target as HTMLFormElement);
    const emailTitle = formData.get('email-title') as string;
    const emailContent = formData.get('email-content') as string;

    // Check if fields are empty
    if (!emailTitle || !emailContent) {
      this.openPopup('popup-error');
      return;
    }

    // Simulate email sending
    setTimeout(() => {
      this.openPopup('popup-success');
    }, 1000);
  }

  openPopup(popupId: string): void {
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
