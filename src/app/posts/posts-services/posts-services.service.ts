import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


let url = 'https://jsonplaceholder.typicode.com/posts'

@Injectable({
  providedIn: 'root'
})

export class PostsServicesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(url)
  }

  updatePost(formData: any) {
    return this.http.post<any[]>(`${url}/${formData.id}`,
      {
        title: formData.title,
      })
  }
  viewPost(rowId:number){
    return this.http.get<any[]>(`${url}/${rowId}/comments`)
  }
}
