import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'http://localhost:3000/users'

  constructor(private http: HttpClient) { }

  registerUser(payload: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, payload)
  }

  loginUser(email: string, password: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?email=${email}&password=${password}`)
      .pipe(map(user => {
        if(user){
          localStorage.setItem('currentUser', JSON.stringify(user[0].id))
        }
      }))
  }
}
