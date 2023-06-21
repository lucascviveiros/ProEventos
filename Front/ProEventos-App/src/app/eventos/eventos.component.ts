import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  //exemlo de obj
  public evento: any = {
      Tema: 'Angular',
      Local: 'SP'

  }

  //exemplo de lista
  public eventos: any = [
    {
      Tema: 'Angular',
      Local: 'SP'
    },
    {
      Tema: '.NET',
      Local: 'RJ'
    },
    {
      Tema: '.Angular e suas novidades',
      Local: 'PR'
    }
  
  ]

  constructor() {}

  ngOnInit(): void {
    
  }



}
