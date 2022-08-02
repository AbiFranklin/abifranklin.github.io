import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userAuthService: UserAuthService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  public isLoggedIn() {
    return this.userAuthService.isLoggedIn()
  }

  public logOut() {
    let userId = this.userAuthService.getUserId()
    this.userService.signOut(userId).subscribe(
      (res) => {
        this.userAuthService.clear()
        this.router.navigate(['/home'])
      },
      (err) => {
        console.log(err)
      }
    )
  }

}
