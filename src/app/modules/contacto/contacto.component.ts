import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {

  public readonly contact  = {
    title: 'Puedes contactar conmigo ...',
    show: true,
    email: 'ainhoasanchezyepes16@gmail.com',
    phone: '687 87 57 77',
  };

  public readonly contactForm = {
    title: '... o enviándome un mensaje 😊',
    show: true,
    formspree: 'https://formspree.io/f/moqrrrer',
    name: 'Nombre',
    namePlaceholder: '',
    email: 'Email',
    emailPlaceholder: '',
    phone: 'Teléfono',
    phonePlaceholder: '',
    message: 'Mensaje',
    messagePlaceholder: '',
    sendButton: 'Enviar mensaje'
  };

}
