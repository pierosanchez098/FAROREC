import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
cantidad : number[] = [1,2,3,4,5,6,7,8,9];
click: any;
  constructor() { }

  ngOnInit(): void {
  }
  enviarSolicitud(): void {
    const confirmacion = confirm(`¿Deseas enviar una solicitud de amistad a Persona?`);
    if (confirmacion) {
      console.log(`Solicitud de amistad enviada a Persona`);
      alert(`Solicitud de amistad enviada a Persona`)
    } else {
      console.log(`Cancelaste la solicitud de amistad a Persona`);
    }
  }
  
}
