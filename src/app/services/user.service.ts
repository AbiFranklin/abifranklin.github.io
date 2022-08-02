import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  PATH_OF_API = 'https://ctscertsapi.herokuapp.com/api'

  requestHeader = new HttpHeaders(
    {"No-Auth": "True"}
  )
  constructor(private httpClient: HttpClient) { }

  public signIn(userInfo: any) {
    return this.httpClient.post(this.PATH_OF_API+'/signin', userInfo, { headers: this.requestHeader })
  }

  public signUp(userInfo: any) {
    return this.httpClient.post(this.PATH_OF_API+'/signup', userInfo, { headers: this.requestHeader })
  }

  public getCompanies() {
    return this.httpClient.get(this.PATH_OF_API+'/companies')
  }

  public signOut(userId: any) {
    return this.httpClient.delete(this.PATH_OF_API+'/logout/'+userId)
  }

  public getTraining() {
    return this.httpClient.get(this.PATH_OF_API+'/training')
  }

  public addTraining(training: any){
    return this.httpClient.post(this.PATH_OF_API+'/training', training)
  }
}


