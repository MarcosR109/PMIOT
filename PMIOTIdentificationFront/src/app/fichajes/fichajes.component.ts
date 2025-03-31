import { Component } from '@angular/core';
import { FichajesService } from '../fichajes.service';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-fichajes',
  imports: [CommonModule,HeaderComponent],
  templateUrl: './fichajes.component.html',
  styleUrl: './fichajes.component.css',
})
export class FichajesComponent implements OnInit {
  fichajes: {
    id: number;
    created_at: Date;
    updated_at: Date;
    fecha: Date;
    tipo_de_evento: string;
    user_id: number;
  }[] = [];

  constructor(private fichajesService: FichajesService) {
    fichajesService
      .getFichajes()
      .subscribe((data: any) => (this.fichajes = data['Fichajes encontrados']));
  }
  ngOnInit() {
    this.fichajesService.getFichajes().subscribe((data: any) => {
      this.fichajes = data['Fichajes encontrados'];
    });
  }
}
