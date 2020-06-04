import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  mensaje: string;
  materia: "PAV II";
  verMateria = true;
  logo = 'https://www.frc.utn.edu.ar/imagenes/logoutn.gif';

  constructor() { }

  ngOnInit() {
    this.mensaje = "hola con interpolacion";
  }

}