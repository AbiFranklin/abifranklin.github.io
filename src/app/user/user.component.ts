import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  company: any = ''

  constructor(private userAuthService: UserAuthService, private router: Router) { }

  ngOnInit(): void {
    if (!this.userAuthService.isLoggedIn()) {
      alert('Please Log In')
      this.router.navigate(['/login'])
    }

    this.company = localStorage.getItem('company')?.toString()
  }
}
