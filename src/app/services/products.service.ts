import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'http://localhost:3000/products'

  constructor(private http: HttpClient) { }

  // Get all products
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
  }
  // Get only highlight products
  getHighlightedProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?isHighlight=true`)
  }
  // Get single product
  getProduct(productId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${productId}`)
  }
}
