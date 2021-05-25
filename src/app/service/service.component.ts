import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { from } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;

  constructor(private http: HttpClient) {
    console.log('service is now ready');
    this.username = 'AbdimulhinYussuf3675';
  
  }

  getProfileInfo() {
    return this.http.get('https://api.github.com/users/' + this.username + '?access_token' + environment.IPI);
  }

  getProfileRepos() {
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?access_token' + environment.IPI);
  }

  updateProfile(username: string) {
   this.username = username;
  }
}