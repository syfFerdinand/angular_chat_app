import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from 'src/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  uri = 'users/'
  constructor(
    private http: HttpClient
    ) { }

  login(username: string,password:string ): Observable<HttpResponse<any>> {

    return this.http.post<any>(environment.apiUrl+'token/', {username,password}, { observe: 'response' }).pipe(
      catchError(error => {
        console.log("error when calling login user api");
        console.error(error);
        return of<HttpResponse<any>>(error); 
      }),
      
    );
    
  }

  store(username: string,password:string): Observable<HttpResponse<any>> {
    let is_active=true
    return this.http.post<any>(environment.apiUrl+this.uri+'create', {username,password, is_active}, { observe: 'response' }).pipe(
      catchError(error => {
        console.log("error when calling create user api");
        console.error(error);
        return of<HttpResponse<any>>(error); 
      }),
      
    );
    
  }

  update(user: User){
    return this.http.put(environment.apiUrl+this.uri+user.id, { user}, { observe: 'response' }).pipe(
      catchError(error => {
        console.log("error when calling update user api");
        console.error(error);
        return of([]); // Retourne une observable vide en cas d'erreur
      })
    );
  }
}
