import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css'],
})
export class RecoverPasswordComponent {
  password: string = '';
  password2: string = '';
  constructor(public userService: UsersService, public router: Router) {}

  recoverPassword() {
    const user = { password: this.password, password2: this.password2 };
    this.userService.RecoverPassword(user).subscribe(
      (data) => {
        if (data.access_token != null) {
          this.userService.setToken(data.token);
          this.router.navigateByUrl('/dashboard');
        } else {
          console.log(data.message);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
