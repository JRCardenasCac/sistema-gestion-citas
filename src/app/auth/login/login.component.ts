import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users/users.service';
import { RequestStatus } from 'src/app/models/request-status.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form = this.formBuilder.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  status: RequestStatus = 'init';
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    public userService: UsersService,
    public router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    if (this.form.valid) {
      this.status = 'loading';

      const user = this.form.getRawValue();

      this.userService.login(user).subscribe(
        (data) => {
          this.status = 'success';
          this.userService.setToken(data.token);
          this.router.navigateByUrl('/dashboard');
        },
        (error) => {
          this.status = 'failed';
          this.errorMessage = 'No se pudo ingresar. Verifica tus credenciales.';
          console.log(error);
        }
      );
    } else {
      this.form.markAllAsTouched();
    }
  }
}
