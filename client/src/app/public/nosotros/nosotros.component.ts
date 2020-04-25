import { Component, OnInit } from '@angular/core';
import { ProvedorModel } from 'src/app/modeles/provedorModel';
import { ProvedoresService } from 'src/app/service/provedores.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})


export class NosotrosComponent implements OnInit {

  listaProvedores: ProvedorModel[]=[];
  p: number = 1;

  constructor(private provedorservice: ProvedoresService) { }

  ngOnInit() {
    this.getProvedores();
  }

  getProvedores():void{
    this.provedorservice.getProvedores().subscribe(p =>{
      this.listaProvedores = p;
    });
  }
}
