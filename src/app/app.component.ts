import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public readonly year = new Date().getFullYear();
  public readonly contact = {
    items: [
      {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/ainhoa-s%C3%A1nchez-1a458b275/',
        img: 'linkedin',
      },
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/lasfotosdenhoa/',
        img: 'instagram',
      },
    ],
  };
}
