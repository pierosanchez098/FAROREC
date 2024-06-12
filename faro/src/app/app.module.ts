import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PrincipalComponent } from './principal/principal.component';

import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ListaAmigosComponent } from './lista-amigos/lista-amigos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EventosComponent } from './eventos/eventos.component';
import { ChatComponent } from './chat/chat.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { MisEventosComponent } from './mis-eventos/mis-eventos.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    FooterComponent,
    HeaderComponent,
    PrincipalComponent,
    LoginComponent,
    RegistroComponent,
    ListaAmigosComponent,
    PerfilComponent,
    EventosComponent,
    ChatComponent,
    AdminComponent,
    MisEventosComponent,
    NotificacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
