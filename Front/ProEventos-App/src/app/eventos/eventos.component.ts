import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  //exemlo de obj
  //public eventos: any = {}
  
  //Exemplo de array
  public eventos: any[] = []; // Initialize as an empty array
/*
  public getEventos(): void 
  {
    this.http.get('https://localhost:7007/api/evento').subscribe(
      response => this.eventos = response, 
      error => console.log(error)
    );

  } */

  public getEventos(): void {
    this.http.get('https://localhost:7007/api/evento').subscribe(
      response => {
        // Convert the eventos object into an array
        this.eventos = Object.values(response);
      },
      error => console.log(error)
    );
  }


  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    //always add the methods on Ng
    //NG is interpreted before html
    this.getEventos();
  }

  /*
  public getEventos(): void 
  {
    this.eventos = 
    [
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
  }*/


}
