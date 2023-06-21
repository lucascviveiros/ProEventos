import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  //exemlo de obj
  public eventos: any = {
    
  }

  public getEventos(): void 
  {
    this.http.get('https://localhost:7007/api/evento').subscribe(
      response => this.eventos = response, 
      error => console.log(error)
    );

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

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    //always add the methods on Ng
    //NG is interpreted before html
    this.getEventos();
  }



}
