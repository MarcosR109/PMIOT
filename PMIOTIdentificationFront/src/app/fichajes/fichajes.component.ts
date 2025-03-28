import { Component } from '@angular/core';
import { FichajesService } from '../fichajes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fichajes',
  imports: [CommonModule],
  templateUrl: './fichajes.component.html',
  styleUrl: './fichajes.component.css'
})
export class FichajesComponent {
  fichajes: { 
    id: number, 
    created_at: Date, 
    updated_at: Date, 
    fecha: Date, 
    tipo_de_evento: string, 
    user_id: number 
  }[] = [];

  constructor(private fichajesService:FichajesService) {
    fichajesService.index().subscribe((data:any)=>this.fichajes = data["Fichajes encontrados"]);
    
  
  }

}
