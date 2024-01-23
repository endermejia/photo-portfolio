import { Component } from '@angular/core';
import { ItemModel } from './components/item-card/item-card.component';

export interface ProfileModel {
  name: string;
  description: {
    title: string;
    show: boolean;
    paragraphs: string[];
  };
  experience: ItemModel[];
  education: ItemModel[];
}

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.scss'],
})
export class SobreMiComponent {
  public readonly profile: ProfileModel = {
    name: 'Ainhoa Sánchez',
    description: {
      title: 'Fotógrafa profesional',
      show: true,
      paragraphs: [
        'Soy una apasionada fotógrafa con más de cinco años de experiencia. Mi amor por la fotografía me llevó a completar alrededor de 15 cursos en Domestika y a obtener un título oficial en fotografía digital.',
        'Mi enfoque es versátil y abarca desde retratos hasta la promoción de eventos y aperturas de negocios.',
        'Mi objetivo principal es inspirar emociones a través de la lente y dejar una impresión duradera en cada proyecto.',
        '¡Bienvenidos a mi mundo visual!',
      ],
    },
    experience: [
      {
        name: 'Fotógrafa profesional',
        organization: 'Ainhoa Sánchez | Photography',
        link: window.location.href,
        img: '../../../assets/ainhoa.webp',
        date_from: '2020-01-01',
        date_to: new Date().toISOString().split('T')[0],
        paragraphs: [
          '<ul>' +
            '<li>Fotografía de eventos</li>' +
            '<li>Fotografía de retrato</li>' +
            '<li>Fotografía corporativa</li>' +
            '</ul>',
        ],
      },
      {
        name: 'Comisario de exposiciones',
        organization: 'DOCULAB - Laboratorio de Documentación Histórica',
        link: 'https://doculab.grupos.uniovi.es/',
        img: '../../../assets/doculab.webp',
        date_from: '2022-04-01',
        date_to: '2022-07-01',
      },
      {
        name: 'Periodista',
        organization: 'ARAMULTIMÈDIA',
        link: 'https://www.aramultimedia.com/',
        img: '../../../assets/aramultimedia.webp',
        date_from: '2016-06-01',
        date_to: '2017-08-01',
      },
    ],
    education: [
      {
        name: 'Curso de Fotografía Digital',
        organization: 'Treintaycinco mm',
        link: 'https://35mm.es/',
        img: '../../../assets/35mm.webp',
        date_from: '2023-09-01',
        date_to: new Date().toISOString().split('T')[0],
      },
      // {
      //   name: 'Grado en Historia del Arte',
      //   organization: 'UNED - Universidad Nacional de Educación a Distancia',
      //   link: 'https://www.uned.es/',
      //   img: '../../../assets/uned.webp',
      //   date_from: '2022-09-01',
      //   date_to: '2023-07-01'
      // },
      {
        name: 'Grado en Historia del Arte',
        organization: 'UNIOVI - Universidad de Oviedo',
        link: 'https://www.uniovi.es/',
        img: '../../../assets/uniovi.webp',
        date_from: '2021-09-01',
        date_to: '2022-07-01',
      },
      {
        name: 'Grado en Historia del Arte',
        organization: 'UV - Universidad de València',
        link: 'https://www.uv.es/',
        img: '../../../assets/uv.webp',
        date_from: '2018-09-01',
        date_to: '2021-07-01',
      },
      {
        name: 'Grado en Periodismo',
        organization: 'UCH CEU - Universidad Cardenal Herrera',
        link: 'https://www.uchceu.es/',
        img: '../../../assets/uch.webp',
        date_from: '2016-09-01',
        date_to: '2017-07-01',
      },
      {
        name: 'Grado en Periodismo',
        organization: 'UNAV- Universidad de Navarra',
        link: 'https://www.unav.edu',
        img: '../../../assets/unav.webp',
        date_from: '2015-09-01',
        date_to: '2016-07-01',
      },
    ],
  };
}
