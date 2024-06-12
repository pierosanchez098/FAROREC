import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  mostrarPopup: boolean = false;

  constructor(private router: Router) {}

  mostrarPopupCerrarSesion(): void {
    this.mostrarPopup = true;
  }

  confirmarCerrarSesion(): void {
    this.mostrarPopup = false;
    this.router.navigate(['/login']);
  }

  cancelarCerrarSesion(): void {
    this.mostrarPopup = false;
  }
}
