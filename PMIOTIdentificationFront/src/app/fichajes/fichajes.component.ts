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
    created_at: Date | null;
    updated_at: Date | null;
    fecha: any;
    tipo_de_evento: string;
    user_id: number;
    nombre: string;
  }[] = [];
  filterHour: string = ''; 
  filterUser: string = ''; 
  filterDate: any;         

  constructor(private fichajesService: FichajesService) {}

  ngOnInit() {
    this.fichajes = fichajes;
  }

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

export const fichajes = [
    {
        "id": 1,
        "created_at": null,
        "updated_at": null,
        "fecha": "2025-04-07 08:01:15",
        "tipo_de_evento": "fichaje",
        "user_id": 1,
        "nombre": "Laura Martínez"
    },
    {
        "id": 2,
        "created_at": null,
        "updated_at": null,
        "fecha": "2025-04-07 08:15:44",
        "tipo_de_evento": "fichaje",
        "user_id": 2,
        "nombre": "Carlos Ramírez"
    },
    {
        "id": 3,
        "created_at": null,
        "updated_at": null,
        "fecha": "2025-04-07 08:22:10",
        "tipo_de_evento": "fichaje",
        "user_id": 3,
        "nombre": "Ana Torres"
    },
    {
        "id": 4,
        "created_at": null,
        "updated_at": null,
        "fecha": "2025-04-07 08:35:32",
        "tipo_de_evento": "fichaje",
        "user_id": 4,
        "nombre": "Diego Fernández"
    },
    {
        "id": 5,
        "created_at": null,
        "updated_at": null,
        "fecha": "2025-04-07 08:41:23",
        "tipo_de_evento": "fichaje",
        "user_id": 5,
        "nombre": "María Gómez"
    },
    {
        "id": 6,
        "created_at": null,
        "updated_at": null,
        "fecha": "2025-04-07 09:02:49",
        "tipo_de_evento": "fichaje",
        "user_id": 1,
        "nombre": "Laura Martínez"
    },
    {
        "id": 7,
        "created_at": null,
        "updated_at": null,
        "fecha": "2025-04-07 09:12:06",
        "tipo_de_evento": "fichaje",
        "user_id": 3,
        "nombre": "Ana Torres"
    },
    {
        "id": 8,
        "created_at": null,
        "updated_at": null,
        "fecha": "2025-04-07 09:15:58",
        "tipo_de_evento": "fichaje",
        "user_id": 2,
        "nombre": "Carlos Ramírez"
    },
    {
        "id": 9,
        "created_at": null,
        "updated_at": null,
        "fecha": "2025-04-07 09:25:04",
        "tipo_de_evento": "fichaje",
        "user_id": 4,
        "nombre": "Diego Fernández"
    },
    {
        "id": 10,
        "created_at": null,
        "updated_at": null,
        "fecha": "2025-04-07 09:45:18",
        "tipo_de_evento": "fichaje",
        "user_id": 5,
        "nombre": "María Gómez"
    },
    {
        "id": 11,
        "created_at": null,
        "updated_at": null,
        "fecha": "2025-04-07 10:03:32",
        "tipo_de_evento": "fichaje",
        "user_id": 1,
        "nombre": "Laura Martínez"
    },
    {
        "id": 12,
        "created_at": null,
        "updated_at": null,
        "fecha": "2025-04-07 10:20:45",
        "tipo_de_evento": "fichaje",
        "user_id": 2,
        "nombre": "Carlos Ramírez"
    },
    {
        "id": 13,
        "created_at": null,
        "updated_at": null,
        "fecha": "2025-04-07 10:29:17",
        "tipo_de_evento": "fichaje",
        "user_id": 3,
        "nombre": "Ana Torres"
    },
    {
        "id": 14,
        "created_at": null,
        "updated_at": null,
        "fecha": "2025-04-07 10:55:46",
        "tipo_de_evento": "fichaje",
        "user_id": 5,
        "nombre": "María Gómez"
    }
]
