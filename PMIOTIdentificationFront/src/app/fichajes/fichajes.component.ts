import { Component, OnInit } from '@angular/core';
import { FichajesService } from '../fichajes.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí

@Component({
  selector: 'app-fichajes',
  standalone: true, // Hacemos que este componente sea standalone
  imports: [CommonModule, HeaderComponent, FormsModule], // Asegúrate de incluir FormsModule aquí
  templateUrl: './fichajes.component.html',
  styleUrls: ['./fichajes.component.css'],
})
export class FichajesComponent implements OnInit {
  fichajes: {
    id: number;
    created_at: Date;
    updated_at: Date;
    fecha: any;
    tipo_de_evento: string;
    user_id: number;
  }[] = [];
  filterHour: string = '';  // Formato 'HH:MM' (ej: '11:53' para filtrar fichajes a las 11:53 AM)
  filterUser: string = ''; // Filtro por usuario
  filterDate: any; // Filtro por fecha

  constructor(private fichajesService: FichajesService) {}

  ngOnInit() {
    this.fichajesService.getFichajes().subscribe((data: any) => {
      this.fichajes = data['Fichajes encontrados'];
    });
  }

  // Método para filtrar los fichajes
  filteredFichajes() {
    return this.fichajes.filter((fichaje) => {
      const fichajeDate = new Date(fichaje.fecha);  // Convertir el string a objeto Date
      const fichajeHour = fichajeDate.getHours().toString().padStart(2, '0');
      const fichajeMinutes = fichajeDate.getMinutes().toString().padStart(2, '0');
      const fichajeTime = `${fichajeHour}:${fichajeMinutes}`;  // Formato 'HH:MM'
  
      return (
        (!this.filterUser || fichaje.user_id.toString().includes(this.filterUser)) &&
        (!this.filterDate || fichaje.fecha.startsWith(this.filterDate)) &&
        (!this.filterHour || fichajeTime === this.filterHour)
      );
    });
  }
  
}
