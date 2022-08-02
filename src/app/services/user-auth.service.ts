import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setRole(role: any) {
    localStorage.setItem("role", JSON.stringify(role))
  }

  public getRole() {
    return localStorage.getItem("role")
  }

  public setUserId(userId: any) {
    localStorage.setItem("userId", JSON.stringify(userId))
  }

  public getUserId() {
    return localStorage.getItem("userId")
  }

  public setCompany(company: any) {
    localStorage.setItem("company", company)
  }

  public getCompany() {
    localStorage.getItem("company")
  }

  public clear() {
    localStorage.clear()
  }

  public isLoggedIn() {
    return this.getRole() && this.getUserId()
  }
}
