import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
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

  get(): Observable<User | undefined>{
          
    const accessToken = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`
    });

    return this.http.get<User>(environment.apiUrl+this.uri+'update',{ headers: headers }).pipe(
      catchError(error => {
        console.log("error when calling get user api");
        console.error(error);
        return of(undefined); // Retourne une observable vide en cas d'erreur
      })
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
    return this.http.put(environment.apiUrl+this.uri+'update', { user}, { observe: 'response' }).pipe(
      catchError(error => {
        console.log("error when calling update user api");
        console.error(error);
        return of([]); // Retourne une observable vide en cas d'erreur
      })
    );
  }
  
  delete(){
    return this.http.put(environment.apiUrl+this.uri+'update', { observe: 'response' }).pipe(
      catchError(error => {
        console.log("error when calling delete user api");
        console.error(error);
        return of([]); // Retourne une observable vide en cas d'erreur
      })
    );
  }
  
}
