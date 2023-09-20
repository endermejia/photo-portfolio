import {Component} from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.scss']
})
export class SobreMiComponent {

  public readonly profile = {
    name: 'Ainhoa Sánchez',
    description: {
      title: 'Fotógrafa profesional',
      show: true,
      paragraphs: [
        'Soy una apasionada fotógrafa con más de cinco años de experiencia. Mi amor por la fotografía me llevó a completar alrededor de 15 cursos en Domestika y a obtener un título oficial en fotografía digital.',
        'Mi enfoque es versátil y abarca desde retratos hasta la promoción de eventos y aperturas de negocios.',
        'Mi objetivo principal es inspirar emociones a través de la lente y dejar una impresión duradera en cada proyecto.',
        '¡Bienvenidos a mi mundo visual!',
      ]
    },
    experience: [
      {
        name: 'Comisario de exposiciones',
        organization: 'DOCULAB - Laboratorio de Documentación Histórica',
        link: 'https://doculab.grupos.uniovi.es/',
        img: '../../../assets/doculab.webp',
        date_from: '2021-07-01',
        date_to: '2021-07-01'
      },
      {
        name: 'Periodista',
        organization: 'ARAMULTIMÈDIA',
        link: 'https://www.aramultimedia.com/',
        img: '../../../assets/aramultimedia.webp',
        date_from: '2015-07-01',
        date_to: '2017-12-01'
      }
    ],
    education: [
      {
        name: 'Curso de Fotografía Digital',
        organization: 'Treintaycinco mm',
        link: 'https://35mm.es/',
        img: '../../../assets/35mm.webp',
        date_from: '2023-09-01',
        date_to: new Date().toISOString().split('T')[0]
      },
      {
        name: 'Grado en Historia del Arte',
        organization: 'UNED - Universidad Nacional de Educación a Distancia',
        link: 'https://www.uned.es/',
        img: '../../../assets/uned.webp',
        date_from: '2022-09-01',
        date_to: '2023-07-01'
      },
      {
        name: 'Grado en Historia del Arte',
        organization: 'Universidad de Oviedo',
        link: 'https://www.uniovi.es/',
        img: '../../../assets/uniovi.webp',
        date_from: '2021-09-01',
        date_to: '2022-07-01'
      },
      {
        name: 'Grado en Historia del Arte',
        organization: 'Universidad de València',
        link: 'https://www.uv.es/',
        img: '../../../assets/uv.webp',
        date_from: '2018-09-01',
        date_to: '2020-07-01'
      },
      {
        name: 'Grado en Periodismo',
        organization: 'Universidad de Navarra',
        link: 'https://www.unav.edu',
        img: '../../../assets/unav.webp',
        date_from: '2015-09-01',
        date_to: '2017-07-01',
      }
    ]
  };

}
