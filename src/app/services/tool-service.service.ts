import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tools } from '../models/tools';


@Injectable({
  providedIn: 'root'
})
export class ToolServiceService {
  baseUrl: string = "http://localhost:3000/tools";

  constructor(private http: HttpClient) { }

  getAllTools(): Observable<Tools[]> {
    return this.http.get<Tools[]>(this.baseUrl);
}

getToolByID(id: number): Observable<Tools> {
  return this.http.get<Tools>(this.baseUrl + "/" + id);
}

createNewTool(newTool: Tools): Observable<Tools>{
  return this.http.post<Tools>(this.baseUrl, newTool);
}

editToolByID(id: number, edittedTool: Tools): Observable<Tools> {
  return this.http.put<Tools>(this.baseUrl + "/" + id, edittedTool);
}

deleteToolByID(id: number): Observable<any> {
  return this.http.delete<any>(this.baseUrl + "/" + id)
}

searchTools(s: string): Observable<any> {
  return this.http.get<Tools>(this.baseUrl + "?q=" + s);
}

sortByPrice():Observable<any> {
  return this.http.get<Tools>(this.baseUrl + "?_sort=price");
}

sortByPriceDesc():Observable<any>{
  return this.http.get<Tools>(this.baseUrl + "?_sort=price&_order=desc")
}

sortByName():Observable<any> {
  return this.http.get<Tools>(this.baseUrl + "?_sort=name");
}



}
