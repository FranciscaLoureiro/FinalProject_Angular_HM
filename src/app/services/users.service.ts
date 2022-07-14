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

  loginUser(payload: any): Observable<any> {
    const { email, password } = payload
    return this.http.get<any[]>(`${this.apiUrl}?email=${email}&password=${password}`)
  }

  updateUser(userId: number, payload: any){
    return this.http.put<any[]>(`${this.apiUrl}/${userId}`,payload)
  }
}
