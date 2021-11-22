import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  paises: any = [];

  constructor( private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://restcountries.com/v2/lang/es')
      .subscribe( paises => this.paises = paises );
  }

  drop(evento: CdkDragDrop<any>){
    console.log("Hola", evento);
    moveItemInArray(this.paises, evento.previousIndex, evento.currentIndex);
  }
}
