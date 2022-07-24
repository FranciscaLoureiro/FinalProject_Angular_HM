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
  getProducts(type: any = undefined, color: any = undefined): Observable<any[]> {
    console.log(type)
    let query = ''

    if(type && color){
      query = `?type=${type}&color=${color}`
    }
    if(type && !color){
      query = `?type=${type}`
    }
    if(!type && color){
      query = `?color=${color}`
    }

    return this.http.get<any[]>(`${this.apiUrl}${query}`)
  }
  // Get only highlight products
  getHighlightedProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?isHighlight=true`)
  }
  // Get single product
  getProduct(productId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${productId}`)
  }
  // Get wishlist products
  getWishlistProducts(products: any[]): Observable<any[]>{
    const query = `?id=${products.join('&id=')}`
    return this.http.get<any[]>(`${this.apiUrl}${query}`)
  }
  // Create product
  createProduct(product: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, product)
  }
  // Update product
  updateProduct(productId: number, payload: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${productId}`, payload)
  }
  // Delete product
  deleteProduct(productId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${productId}`)
  }
}
