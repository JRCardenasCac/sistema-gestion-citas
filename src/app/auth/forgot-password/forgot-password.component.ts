import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  email: string = '';
  constructor(public userService: UsersService, public router: Router) {}

  ngOnInit(): void {}

  forgotPassword() {
    const user = { email: this.email };
    this.userService.forgotPassword(user).subscribe(
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
