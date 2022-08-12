import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Items } from './Models/items';
import { APIResponse } from './Models/api-response';
import { Category } from './Models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListServiceService {
  private API_URL = "http://localhost:3000/shopping_list";
  private API_URL2 = "http://localhost:3000/categories";

  private _handleHttpErrors(retVal: any) {
    return (err: any) => {
      console.log(err);
      return of({status:err.status, message:err.message, data:retVal});
    }
  }

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<APIResponse<Items[]>>{
    return this.http.get<APIResponse<Items[]>>(this.API_URL).pipe(catchError(this._handleHttpErrors([])));
  }

  getItemById(id:string): Observable<APIResponse<Items>>{
    return this.http.get<APIResponse<Items>>(this.API_URL + '/' + id).pipe(catchError(this._handleHttpErrors(new Items())));
  }

  createItem(data:Items): Observable<APIResponse<Items>>{
    return this.http.post<APIResponse<Items>>(this.API_URL, data).pipe(catchError(this._handleHttpErrors(new Items())));
  }
  
  updateItem(id:string, data:Items): Observable<APIResponse<Items>>{
    return this.http.patch<APIResponse<Items>>(this.API_URL + '/' + id, data).pipe(catchError(this._handleHttpErrors(new Items())));
  }
  
  deleteItem(id:string): Observable<APIResponse<Items>>{
    return this.http.delete<APIResponse<Items>>(this.API_URL + '/' + id).pipe(catchError(this._handleHttpErrors(new Items())));
  }

  // Categories Service Method
  createGroup(data:Category): Observable<APIResponse<Category>>{
    return this.http.post<APIResponse<Category>>(this.API_URL2, data).pipe(catchError(this._handleHttpErrors(new Items())));
  }
  getAllGroups(): Observable<APIResponse<Category[]>>{
    return this.http.get<APIResponse<Category[]>>(this.API_URL2).pipe(catchError(this._handleHttpErrors([])));
  }

  getGroupById(id:string): Observable<APIResponse<Category>>{
    return this.http.get<APIResponse<Category>>(this.API_URL2 + '/' + id).pipe(catchError(this._handleHttpErrors(new Items())));
  }
  updateGroup(id:string, data:Category): Observable<APIResponse<Category>>{
    return this.http.patch<APIResponse<Category>>(this.API_URL2 + '/' + id, data).pipe(catchError(this._handleHttpErrors(new Items())));
  }
  deleteGroup(id:string): Observable<APIResponse<Category>>{
    return this.http.delete<APIResponse<Category>>(this.API_URL2 + '/' + id).pipe(catchError(this._handleHttpErrors(new Items())));
  }
}
