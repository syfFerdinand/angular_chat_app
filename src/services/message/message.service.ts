import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Message } from 'src/models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  uriParent = "users/"
  uri = "messages/"

  constructor(
    private http: HttpClient
  ) { }

  //return list of latest messages about an user  
  getAll(id: number): Observable<Message[]> {
    console.log("get messages");
    return this.http.get<Message[]>(environment.apiUrl+this.uriParent+id+'/'+this.uri+'latest').pipe(
      catchError(error => {
        console.log("error when calling get latest user message api");
        console.error(error);
        return of([]); // Retourne une observable vide en cas d'erreur
      })
    );
  }

  //return list of messages between two user
  get(id: number,with_id: number){
    return this.http.get<Message>(environment.apiUrl+this.uriParent+id+'/'+this.uri+with_id).pipe(
      catchError(error => {
        console.log("error when calling get a message api");
        console.error(error);
        return of([]); // Retourne une observable vide en cas d'erreur
      })
    );
  }

  //
  store(content: string,send_at:number,send_by: number ): Observable<HttpResponse<Message>> {

    return this.http.post<Message>(environment.apiUrl+this.uri, {content,send_at,send_by}, { observe: 'response' }).pipe(
      catchError(error => {
        console.log("error when calling create message api");
        console.error(error);
        return of<HttpResponse<any>>(error); 
      }),
      
    );
  }

  update(message: Message){
    return this.http.put(environment.apiUrl+this.uri+message.id, { message}, { observe: 'response' }).pipe(
      catchError(error => {
        console.log("error when calling update message api");
        console.error(error);
        return of([]); // Retourne une observable vide en cas d'erreur
      })
    );
  }

  delete(id: number){
    return this.http.delete(environment.apiUrl+this.uri+id).pipe(
      catchError(error => {
        console.log("error when calling delete message api");
        console.error(error);
        return of(null); // Retourne une observable vide en cas d'erreur
      })
    );
  }
}
