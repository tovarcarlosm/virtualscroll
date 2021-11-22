import {Component, OnInit, ViewChild} from '@angular/core';
import {CdkVirtualScrollViewport} from "@angular/cdk/scrolling";

@Component({
  selector: 'virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.css']
})
export class VirtualScrollComponent implements OnInit {

  @ViewChild( CdkVirtualScrollViewport ) viewport: CdkVirtualScrollViewport | undefined;

  elementos = Array(1000).fill(0);

  constructor() { }

  ngOnInit(): void {
    console.log( this.elementos );
  }

  irAlInicio(){
    this.viewport?.scrollToIndex( 0 );
  }

  irAlMedio(){
    this.viewport?.scrollToIndex( this.elementos.length / 2 );
  }

  irAlFinal(){
    this.viewport?.scrollToIndex( this.elementos.length );
  }

}
