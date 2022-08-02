import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  @Output() userCreated = new EventEmitter<{ email: string }>();


  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  signUp(signUpForm: NgForm) {
    let userInfo = 
    {email: signUpForm.value.email,
      password: signUpForm.value.password,
      passconf: signUpForm.value.passconf,
      company: signUpForm.value.company
    }

    this.userService.signUp(userInfo).subscribe(
      (res) => {
        if (res == "Incorrect Email or Password") {
          alert(res+". If problem persists, please contact CTS.")
        }
        this.userCreated.emit({ email: userInfo.email });
        signUpForm.reset()

      },
      (err) => {
        console.log('ERR', err)
      }
    )
  }

}

