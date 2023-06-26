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
  public eventosFiltrados: any[] = []; 

  //Exemplo de number
  widthImg: number = 150;
  marginImg: number = 2;
  showImg: boolean = true; 
  private _filterList: string = '';

  public get filterList(): string
  {
    return this._filterList;
  }

  public set filterList(value: string)
  {
    this._filterList = value
    this.eventosFiltrados = this.filterList ? this.MakeFilter(this.filterList) : this.eventos;
  }

  MakeFilter(filterBy: string): any 
  {
    filterBy = filterBy.toLocaleLowerCase();
    return this.eventos.filter(
      evento => evento.tema.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
                evento.local.toLocaleLowerCase().indexOf(filterBy) !== -1

    );
  }
  
  showImageWithMethod()
  {
    this.showImg = !this.showImg;
  }

  public getEventos(): void {
    this.http.get('https://localhost:7007/api/evento').subscribe(
      response => {
        // Convert the eventos object into an array
        this.eventos = Object.values(response);
        this.eventosFiltrados = this.eventos;
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

}
