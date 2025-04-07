import { Component } from '@angular/core';
//import { AuthService } from '../auth.service'; // Importamos el servicio
import { Router} from '@angular/router'; // Para la redirección
import { CommonModule } from '@angular/common'; // Para usar CommonModule
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule,ReactiveFormsModule],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  
  /*username: string = '';
  password: string = '';
  errorMessage: string = ''; // Para mostrar mensajes de error
*/

  constructor(private router: Router) { }
  //constructor(private authService: AuthService, private router: Router) { }

  onLogin() {

    this.router.navigate(['/fichajes']);
    /*this.authService.login(this.username, this.password).subscribe(
      (response) => {
        // Si la respuesta es exitosa, almacenamos el token y redirigimos
        localStorage.setItem('token', response.token); // Guardamos el token
        this.router.navigate(['/fichajes']); // Redirigimos a la página de fichajes
      },
      (error) => {
        // Si la autenticación falla, mostramos el mensaje de error
        this.errorMessage = 'Credenciales incorrectas. Inténtalo de nuevo.';
      }
    );*/
  }
}

