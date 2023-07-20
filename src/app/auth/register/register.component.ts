import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  name: string = '';
  lastname: string = '';
  mobile_phone: string = '';
  email: string = '';
  password: string = '';
  token: string = '';
  errorMessage: string = '';

  constructor(private usersService: UsersService, public router: Router) {}

  ngOnInit(): void {}

  register(): void {
    if (
      !this.name ||
      !this.lastname ||
      !this.mobile_phone ||
      !this.email ||
      !this.password
    ) {
      this.errorMessage = 'Todos los campos son obligatorios';
      return;
    }

    if (!this.email.includes('@')) {
      this.errorMessage = 'El correo electrónico no es válido';
      return;
    }

    let bodyData = {
      name: this.name,
      lastname: this.lastname,
      mobile_phone: this.mobile_phone,
      email: this.email,
      password: this.password,
      profile: 'PATIENT',
    };

    this.usersService.register(bodyData).subscribe(
      (response: any) => {
        console.log(response);
        if (response.access_token != null) {
          console.log('Registro satisfactorio');
          this.usersService.setToken(response.access_token);
          this.router.navigateByUrl('/dashboard');
        } else {
          this.errorMessage = 'No se pudo registrar el usuario';
        }
      },
      (error) => {
        console.error(error);
        this.errorMessage = 'Ocurrió un error al intentar registrar el usuario';
      }
    );
  }
}
