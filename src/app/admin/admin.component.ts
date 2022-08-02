import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  message: string = ''
  constructor(private userAuthService: UserAuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.userAuthService.isLoggedIn()) {
      if (this.userAuthService.getRole() === '0') {
        alert('Unauthorized User')
        this.router.navigate(['/user'])
      }
    } else {
      alert('Please Log In')
      this.router.navigate(['/login'])
    }
  }

  onUserAdded(eventData: { email: string }) {
    this.message = ''
    this.message = `Latest action: New user created for ${eventData.email}`
    };

    onTrainingAdded(eventData: { name: string }) {
      this.message = ''
      this.message = `Latest action: New training record created for ${eventData.name}`
      };

}
