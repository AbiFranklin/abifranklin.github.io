import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private userAuthService: UserAuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signIn(signInForm: NgForm) {
    let userInfo = 
    {email: signInForm.value.email,
      password: signInForm.value.password
    }
    this.userService.signIn(userInfo).subscribe(
      (res: any) => {
        if (res == "Incorrect Email or Password") {
          alert(res+". If problem persists, please contact CTS.")
        } else {
          this.userAuthService.setRole(res.adminStatus)
          this.userAuthService.setUserId(res.id)
          this.userAuthService.setCompany(res.company)

          if(res.adminStatus == 1) {
            this.router.navigate(['/admin'])
          } else {
            this.router.navigate(['/user'])
          }
        }
      },
      (err) => {
        console.log('ERR', err)
      }
    )
  }

}
