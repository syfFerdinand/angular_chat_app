import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MessageLatest } from 'src/models/message-latest.model';
import { Message } from 'src/models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  uriParent = "users/"
  uri = "messages/"
  options = {}

  constructor(
    private http: HttpClient
  ) { 
      
    const accessToken = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`
    });

    this.options = { headers: headers };
  }

  //return list of latest messages about an user  
  getAll(id: number): Observable<MessageLatest[]> {
    console.log("get messages");
    return this.http.get<MessageLatest[]>(environment.apiUrl+this.uriParent+this.uri+'latest', this.options).pipe(
      catchError(error => {
        console.log("error when calling get latest user message api");
        console.error(error);
        return of([]); // Retourne une observable vide en cas d'erreur
      })
    );
  }

  //return list of messages between two user
  get(with_id: number): Observable<Message[]> {
    return this.http.get<Message[]>(environment.apiUrl+this.uriParent+this.uri+with_id, this.options).pipe(
      catchError(error => {
        console.log("error when calling get a message api");
        console.error(error);
        return of([]); // Retourne une observable vide en cas d'erreur
      })
    );
  }

  //send a message
  store(content: string,send_at:number ): Observable<HttpResponse<Message>> {

    return this.http.post<Message>( environment.apiUrl+this.uri, {content,send_at}, this.options).pipe(
      catchError(error => {
        console.log("error when calling create message api");
        console.error(error);
        return of<any>(error); 
      }),
      
    );
  }

  //update user message
  update(message: Message){
    return this.http.put(environment.apiUrl+this.uri+message.id, { message}, this.options).pipe(
      catchError(error => {
        console.log("error when calling update message api");
        console.error(error);
        return of([]); // Retourne une observable vide en cas d'erreur
      })
    );
  }

  //delete message
  delete(id: number){
    return this.http.delete(environment.apiUrl+this.uri+id, this.options).pipe(
      catchError(error => {
        console.log("error when calling delete message api");
        console.error(error);
        return of(null); // Retourne une observable vide en cas d'erreur
      })
    );
  }
}
